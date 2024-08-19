const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    img: { type: String, required: true },
    isLocked: { type: Boolean, default: false },
    phone: { type: Number, default: '' },
    address: { type: String, default: '' },
    resetToken: { type: String },
    refreshTokens: { type: String },
    resetTokenExpiration: { type: Date },
  },
  { collection: 'users' }
);

const User = mongoose.model('User', usersSchema);

module.exports = User;
