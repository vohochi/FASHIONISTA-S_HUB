const Product = require('../models/productSchema');
const connectDb = require('../models/db');

//---------------------------Products--------------------------------//

exports.getProducts = async (req, res, next) => {
  try {
    await connectDb();
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to fetch products', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getHotProducts = async (req, res, next) => {
  try {
    await connectDb();

    const products = await Product.find({ hot: true }).limit(3).exec();

    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: 'Không tìm thấy sản phẩm nào' });
    }
  } catch (error) {
    console.error('Failed to fetch hot products', error);
    res.status(500).send('Lỗi hệ thống');
  }
};
exports.getTrendingProducts = async (req, res, next) => {
  try {
    await connectDb();

    const products = await Product.find({ trending: true }).limit(3).exec();

    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: 'Không tìm thấy sản phẩm nào' });
    }
  } catch (error) {
    console.error('Failed to fetch trending products', error);
    res.status(500).send('Lỗi hệ thống');
  }
};

exports.getTopRatedProducts = async (req, res, next) => {
  try {
    await connectDb();
    const products = await Product.find({ topRate: true })
      .sort({ _id: -1 })
      .limit(3)
      .exec();

    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: 'Không tìm thấy sản phẩm nào' });
    }
  } catch (error) {
    console.error('Failed to fetch top rated products', error);
    res.status(500).send('Lỗi hệ thống');
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    await connectDb();
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to fetch products', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    await connectDb();
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'ID không hợp lệ' });
    }
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const { name, price, categoryId, description } = req.body;
    const img = req.file.originalname;
    await connectDb();
    const newProduct = new Product({
      name,
      price,
      categoryId,
      img,
      description,
    });
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).send('Lỗi hệ thống');
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, price, categoryId, description } = req.body;
    const img = req.file ? req.file.originalname : null;
    await connectDb();
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        categoryId,
        img,
        description,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại.' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ message: 'ID không hợp lệ.' });
    }
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  await connectDb();
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res.status(404).json({ message: 'Không tìm thấy sản phẩm để xóa.' });
  }
  res.status(200).json({ message: 'Xóa thành công.' });
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to fetch products', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
