const Order = require('../models/orderSchema');
const connectDb = require('../models/db');
const axios = require('axios');

// Tạo một đơn hàng mới
exports.createOrder = async (req, res) => {
  const orderData = req.body;
  try {
    await connectDb();
    const order = await Order.create(orderData);
    res.status(201).json(order);
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.error('Validation error:', error);
      res
        .status(400)
        .json({ message: 'Validation error', errors: error.errors });
    } else {
      console.error('Failed to create order', error);
      res.status(500).json({ message: 'Failed to create order' });
    }
  }
};

// Lấy tất cả các đơn hàng
exports.getOrders = async (req, res) => {
  try {
    await connectDb();
    const orders = await Order.find().populate('products._id');

    res.status(200).json(orders);
  } catch (error) {
    console.error('Failed to fetch orders', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

// Lấy một đơn hàng cụ thể bằng ID
exports.getOrderById = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    await connectDb();
    const order = await Order.findById(orderId).populate('products._id');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Failed to fetch order', error);
    res.status(500).json({ message: 'Failed to fetch order' });
  }
};

// Cập nhật một đơn hàng bằng ID
exports.updateOrder = async (req, res) => {
  const orderId = req.params.orderId;
  const { orderStatus, paymentStatus } = req.body;

  try {
    await connectDb();
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus, paymentStatus },
      { new: true }
    ).populate('products._id');

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({
      message: 'Order updated successfully',
      order: updatedOrder,
    });
  } catch (error) {
    console.error('Failed to update order', error);
    res.status(500).json({ message: 'Failed to update order' });
  }
};

// Xóa một đơn hàng bằng ID
exports.deleteOrder = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    await connectDb();
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({
      message: 'Order deleted successfully',
      order: deletedOrder,
    });
  } catch (error) {
    console.error('Failed to delete order', error);
    res.status(500).json({ message: 'Failed to delete order' });
  }
};

// Lấy tất cả các đơn hàng của một địa chỉ email
exports.getOrdersByEmail = async (req, res) => {
  const email = req.params.email;

  await connectDb();

  const orders = await Order.find({
    'shippingAddress.email': email,
  }).populate('products._id');
  console.log(orders);
  try {
    res.status(200).json(orders);
  } catch (error) {
    console.error('Failed to fetch orders', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

exports.paymentMethod = async (req, res) => {
  //https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
  //parameters
  var accessKey = 'F8BBA842ECF85';
  var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
  var orderInfo = 'pay with MoMo';
  var partnerCode = 'MOMO';
  var redirectUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b';
  var ipnUrl = 'http://localhost:3000/api/v1/payment/callback';
  var requestType = 'captureWallet';
  var amount = '50000';
  var orderId = partnerCode + new Date().getTime();
  var requestId = orderId;
  var extraData = '';

  var orderGroupId = '';
  var autoCapture = true;
  var lang = 'vi';

  //before sign HMAC SHA256 with format
  //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
  var rawSignature =
    'accessKey=' +
    accessKey +
    '&amount=' +
    amount +
    '&extraData=' +
    extraData +
    '&ipnUrl=' +
    ipnUrl +
    '&orderId=' +
    orderId +
    '&orderInfo=' +
    orderInfo +
    '&partnerCode=' +
    partnerCode +
    '&redirectUrl=' +
    redirectUrl +
    '&requestId=' +
    requestId +
    '&requestType=' +
    requestType;
  //puts raw signature
  console.log('--------------------RAW SIGNATURE----------------');
  console.log(rawSignature);
  //signature
  const crypto = require('crypto');
  var signature = crypto
    .createHmac('sha256', secretKey)
    .update(rawSignature)
    .digest('hex');
  console.log('--------------------SIGNATURE----------------');
  console.log(signature);

  //json object send to MoMo endpoint
  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    partnerName: 'Test',
    storeId: 'MomoTestStore',
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    lang: lang,
    requestType: requestType,
    autoCapture: autoCapture,
    extraData: extraData,
    orderGroupId: orderGroupId,
    signature: signature,
  });
  //Create the HTTPS objects

  axios
    .post('https://test-payment.momo.vn/v2/gateway/api/create', requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      console.log(response.data.resultCode);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(`Problem with request: ${error.message}`);
    });
};

exports.paymentCallback = async (req, res) => {
  console.log('callback');
  console.log(req.body);
};
