/**
 * foodController.js
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Joshim Uddin
 */

// Load Essential Model
const Food = require('../models/Food');

/**
 * @controller singleFoodController
 * @desc 
 * @return
 */
const singleFoodController = (req, res) => {
  let isRelated = req.query.related.toLowerCase() === 'true' ? true : undefined;
};

/**
 * @controller foodsController
 * @desc
 * @return
 */
const foodsController = (req, res) => {
  let category = req.query.category ? req.query.category : undefined;
  let limit = req.query.limit ? parseInt(req.query.limit) : 12;
};

/**
 * @controller specialFoodsController
 * @desc
 * @return
 */
const specialFoodsController = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
};

/**
 * @controller topFoodsController
 * @desc
 * @return
 */
const topFoodsController = (req, res) => {
  let category = req.query.category ? req.query.category : undefined;
  let limit = req.query.limit ? parseInt(req.query.limit) : 12;
};

module.exports = {
  singleFoodController,
  foodsController,
  specialFoodsController,
  topFoodsController
};
