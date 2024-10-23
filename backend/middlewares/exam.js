/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// تعریف یک اسکیمای نمونه
const sampleSchema = new Schema({
  name: String,
  age: Number
});

const Sample = mongoose.model('Sample', sampleSchema);

// اتصال به دیتابیس
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const ids = ['60d5ec49f1b2c72d88f8e9b1', '60d5ec49f1b2c72d88f8e9b2']; // آرایه‌ای از _id ها

Sample.find({ '_id': { $in: ids } })
  .then(docs => {
    console.log(docs); // نمایش داده‌های بازیابی شده
  })
  .catch(err => {
    console.error(err);
  });








*/