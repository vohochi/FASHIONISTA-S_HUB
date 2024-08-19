const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    category: String,
    name: String,
    price: Number,
    price_sale: Number,
    image: String,
    image_hover: String,
    description: String,
    category_id: Number,
    topRate: Boolean,
    size: [String],
    saleDecrease: Boolean,
  },
  { collection: 'products' }
);

module.exports = mongoose.model('Product', productSchema);
