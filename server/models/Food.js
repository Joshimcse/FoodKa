/**
 * Food.js
 *
 * @module      :: Model
 * @description :: Represent data model for the Food
 * @author		  :: Joshim Uddin
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  description: {
    short: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium'
    },
    long: {
      type: String,
      default:
        'Consequuntur impedit laborum porro laudantium tempora recusandae quibusdam, amet nam ex quae officia laboriosam voluptas perspiciatis iusto et, magnam expedita repellendus rem. Consectetur assumenda saepe dicta, repudiandae dolore quod aliquid neque quo dolor earum quibusdam consequuntur, consequatur autem tempore, quam modi ipsa unde reiciendis quae amet odit.'
    }
  },
  stock: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  },
  images: {
    thumb: {
      type: String,
      require: true
    },
    presentation: {
      type: Array,
      default: []
    }
  }
});

module.exports = mongoose.model('Food', FoodSchema);
