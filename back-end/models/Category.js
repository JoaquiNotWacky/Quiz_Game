const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, defualt: '' }
});

module.exports = mongoose.model('category', CategorySchema, 'category');
