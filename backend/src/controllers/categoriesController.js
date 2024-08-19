const Category = require('../models/categoriesSchema');
const Product = require('../models/productSchema');
const connectDb = require('../models/db');

exports.getCategories = async (req, res, next) => {
  try {
    await connectDb();
    const categories = await Category.find();
    if (categories) {
      res.status(200).json(categories);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    await connectDb();
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Invalid ID format' });
    }
    const category = await Category.findById(id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.addCategory = async (req, res, next) => {
  try {
    await connectDb();
    const { name, quantity, category } = req.body;
    const newCategory = new Category({ name, quantity, category });
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).send('Lỗi hệ thống');
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    await connectDb();
    const id = req.params.id;
    const { name } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (updatedCategory) {
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ message: 'Category not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    await connectDb();
    const id = req.params.id;
    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: 'Category deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
exports.getProductsByCategory = async (req, res) => {
  const id = req.params.danhmuc;
  try {
    await connectDb();
    const category = await Category.findOne({ id: +id });
    if (!category) {
      return res.status(404).json({ message: 'Không tìm thấy danh mục' });
    }
    const catid = category.id.toString(); // Chuyển đổi thành chuỗi số
    const products = await Product.find({ category_id: catid });
    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: 'Không tìm thấy sản phẩm nào' });
    }
  } catch (error) {
    console.error('Failed to fetch products by category', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
