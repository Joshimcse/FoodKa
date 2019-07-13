/**
 * City.js
 *
 * @module      :: Model
 * @description :: Represent data model for the City
 * @author		  :: Joshim Uddin
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StateSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: true
  }
});

module.exports = mongoose.model('State', StateSchema);
