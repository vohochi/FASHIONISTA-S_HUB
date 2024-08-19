const mongoose = require('mongoose');

// Khai báo url kết nối
const url = 'mongodb://127.0.0.1:27017';
// Khai báo tên database
const dbName = 'bookshop';

// Hàm kết nối
async function connectDb() {
  await mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Kết nối thành công đến server');
}

module.exports = connectDb;
