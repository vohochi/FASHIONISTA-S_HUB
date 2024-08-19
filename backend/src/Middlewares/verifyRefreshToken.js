const jwt = require('jsonwebtoken');

// Middleware xác thực access token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Tiêu đề ủy quyền bị thiếu' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Xác thực access token và kiểm tra tính hợp lệ
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Mã thông báo truy cập hết hạn' });
    }
    return res
      .status(403)
      .json({ message: 'Mã thông báo truy cập không hợp lệ' });
  }
};

// Middleware xác thực refresh token
const verifyRefreshToken = (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Xác thực refresh token và kiểm tra tính hợp lệ
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Refresh token không hợp lệ' });
  }
};

module.exports = { verifyToken, verifyRefreshToken };
