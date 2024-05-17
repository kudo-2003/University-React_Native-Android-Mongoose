//nodeJS
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/AppArduino', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', err => {
  console.error('error connection to MongoDB:', err);
});

mongoose.connection.once('open', () => {
  console.log('connection to MongoDB good!');
});
const userSchema = new mongoose.Schema({
  group: String,
  username: String,
  idsv: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    console.log('Dữ liệu nhận được từ client:', req.body);
  const { group, username, idsv } = req.body;
  const user = new User({ group, username, idsv });
  await user.save();
  res.send('Đăng ký thành công!');
});

app.post('/login', async (req, res) => {
  const { username, idsv } = req.body;
  const user = await User.findOne({ username, idsv });
  if (user) {
    res.send('Đăng nhập thành công!');
  } else {
    res.send('Tên đăng nhập hoặc IDSV không đúng!');
  }
});

app.listen(3000, () => console.log('http://localhost:3000'));
