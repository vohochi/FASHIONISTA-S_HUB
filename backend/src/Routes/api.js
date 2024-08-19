const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const categoriesController = require('../controllers/categoriesController');
const userController = require('../controllers/usersController');
const orderController = require('../controllers/orderController');

const {
  verifyToken,
  verifyRefreshToken,
} = require('../Middlewares/verifyRefreshToken');
const upload = require('../Middlewares/upload');
const authMiddleware = require('../Middlewares/authMiddleware');

//---------------------------Products--------------------------------//
router.get('/products', productController.getProducts);
router.get('/products/hot', productController.getHotProducts);
router.get('/products/trending', productController.getTrendingProducts);
router.get('/products/topRate', productController.getTopRatedProducts);
router.post('/product', productController.addProduct);
router.get('/product/:id', productController.getProductById);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

//---------------------------Categories--------------------------------//

router.get('/categories', categoriesController.getCategories);
router.get(
  '/products/categoryName/:danhmuc',
  categoriesController.getProductsByCategory
);
router.get('/categories/:id', categoriesController.getCategoryById);
router.post(
  '/categories',
  upload.single('img'),
  categoriesController.addCategory
);
router.put(
  '/categories/:id',
  upload.single('img'),
  categoriesController.updateCategory
);
router.delete('/categories/:id', categoriesController.deleteCategory);

//---------------------------Users--------------------------------//

router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser);
router.post(
  '/users/refreshToken',
  verifyRefreshToken,
  userController.refreshToken
);
// router.post('/users/refresh', userController.refreshToken);

router.post('/users/forgot-password', userController.forgotPassword);
router.post('/users/reset-password', userController.resetPassword);
router.put(
  '/users/update-profile/:email',

  userController.updateProfile
);

//---------------------------Order--------------------------------//

// Create a new order
router.post('/orders/create', orderController.createOrder);

// Get all orders
router.get('/orders', orderController.getOrders);

// Get a specific order by ID
router.get('/orders/:orderId', orderController.getOrderById);

// Update an order by ID
router.patch('/orders/:orderId', orderController.updateOrder);

// Delete an order by ID
router.delete('/orders/:orderId', orderController.deleteOrder);

// get invoice by email
router.get('/orders/email/:email', orderController.getOrdersByEmail);

// payment
router.post('/payment', orderController.paymentMethod);
router.post('/payment/callback', orderController.paymentCallback);

module.exports = router;
