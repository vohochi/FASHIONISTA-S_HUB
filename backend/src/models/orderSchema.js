const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        // orderCode: { type: String, required: true, unique: true },
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      village: { type: String, required: true },
      wards: { type: String, required: true },
    },
    totalPrice: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ['Cash', 'QRCODE'],
      default: 'Cash',
    },
    orderStatus: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Fulfilled', 'Reject'],
      default: 'Pending',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  { collection: 'orders' }
);
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
