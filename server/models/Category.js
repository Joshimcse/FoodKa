/**
 * Category.js
 *
 * @module      :: Model
 * @description :: Represent data model for the Category
 * @author		  :: Joshim Uddin
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Category', CategorySchema);
