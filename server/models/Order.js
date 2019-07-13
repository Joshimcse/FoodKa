/**
 * Order.js
 *
 * @module      :: Model
 * @description :: Represent data model for the Order
 * @author		  :: Joshim Uddin
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  foods: [
    {
      food: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  vat: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  userProfile: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  isShipped: {
    type: Boolean,
    default: false
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
