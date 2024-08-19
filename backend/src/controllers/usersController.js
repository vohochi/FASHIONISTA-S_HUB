// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const connectDb = require('../models/db');
const User = require('../models/usersSchema');
const { sendMail } = require('../utils/mailer');

require('dotenv').config();

exports.registerUser = async (req, res) => {
  let { email, password, password2, fullName } = req.body;
  let image = req.file ? req.file.originalname : 'avatar_2.jpg';
  if (password !== password2) {
    return res.status(400).send('Mật khẩu không phù hợp');
  }
  await connectDb();

  const existingUser = await User.findOne({ email });
  try {
    if (existingUser) {
      return res.status(400).send('Người dùng đã tồn tại');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      fullName,
      img: image,
    });

    await newUser.save();

    delete newUser.password;
    return res.status(201).json({
      message: 'Người dùng đã được tạo thành công',
      user: newUser,
    });
  } catch (error) {
    console.error('Error registering user:', error); // Log the error
    res.status(500).json({ success: false, message: 'Đã xảy ra lỗi' });
  }
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Connect to the database (if not already connected)
    await connectDb();

    // 2. Find the user by email
    const user = await User.findOne({ email });

    // 3. Check if the user exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Email hoặc mật khẩu không chính xác',
      });
    }

    // 4. Check if the user is locked
    if (user.isLocked) {
      return res.status(403).json({
        success: false,
        message:
          'Tài khoản của bạn bị khóa. Vui lòng liên hệ với một quản trị viên.',
      });
    }

    // 5. Compare the provided password with the stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: 'Email hoặc mật khẩu không chính xác',
      });
    }

    // 6. Generate access and refresh tokens
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // 7. Update the user's refreshTokens array
    await User.findOneAndUpdate(
      { email: user.email },
      { refreshToken: refreshToken },
      { new: true }
    );
    // 8. Set the refresh token cookie
    setRefreshTokenCookie(res, refreshToken);

    // 9. Send the response with the access token and user data
    res.json({
      success: true,
      accessToken,
      user: {
        fullName: user.fullName,
        image: user.img,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (error) {
    // 10. Handle errors
    console.error('Lỗi khi đăng nhập người dùng:', error);
    res.status(500).json({ success: false, message: 'Đã xảy ra lỗi' });
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    // Xác minh tính hợp lệ của refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Lấy thông tin người dùng từ decoded token
    const userId = decoded.userId;

    // Tìm người dùng trong cơ sở dữ liệu
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: 'Refresh token không hợp lệ' });
    }

    // Tạo access token mới
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );

    // Gửi access token mới về cho client
    res.json({ accessToken });
  } catch (error) {
    console.error('Lỗi khi làm mới token:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi' });
  }
};

function generateAccessToken(user) {
  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '5m' }
  );
}

function generateRefreshToken(user) {
  return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });
}

function setRefreshTokenCookie(res, refreshToken) {
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}
// Forgot password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    await connectDb();
    const user = await User.findOne({ email });
    if (!user) {
      return res.send(
        'Nếu một tài khoản có email đó tồn tại, một liên kết đặt lại đã được gửi.'
      );
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpiration = Date.now() + 60 * 60 * 1000; // 1 hour

    user.set({ resetToken, resetTokenExpiration });
    await user.save();
    console.log(user);

    const htmlContent = `
<p>${new Date().toLocaleString()}</p>
<p>Bạn đã yêu cầu đặt lại mật khẩu.</p>
<p>Nhấp vào liên kết này để đặt lại mật khẩu của bạn:</p>
<p>Mã xác nhận: ${resetToken}</p>
`;

    await sendMail(user.email, 'Password Reset', htmlContent);

    res.status(200).json('Gửi token');
  } catch (err) {
    if (err.code === 'ECONNREFUSED') {
      return res.status(503).send('Database connection error.');
    } else {
      console.error('Error in forgotPassword:', err);
      return res.status(500).send('Server error');
    }
  }
};

// Reset password
exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  await connectDb();
  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiration: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).send('Mã xác nhận không hợp lệ hoặc đã hết hạn.');
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    res.status(200).json('Đặt lại mật khẩu thành công');
  } catch (err) {
    console.error('Lỗi trong quá trình đặt lại mật khẩu:', err);
    return res.status(500).send('Lỗi máy chủ');
  }
};
// Trong file ProfileController.js

exports.updateProfile = async (req, res) => {
  const { fullName, phone, address, img } = req.body;
  const email = req.params.email;

  console.log(fullName, phone, address, img);
  await connectDb();
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Cập nhật thông tin hồ sơ
    user.fullName = fullName || user.fullName;
    user.phone = phone || user.phone;
    user.address = address || user.address;

    // Kiểm tra xem người dùng đã tải lên ảnh hay chưa
    user.img = img || user.img;

    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Failed to update profile:', error);
    res.status(500).json({ message: 'Failed to update profile' });
  }
};
