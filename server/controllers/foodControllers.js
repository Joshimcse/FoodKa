/**
 * foodController.js
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Joshim Uddin
 */

// Load Essential Model
const Food = require('../models/Food');

// utils
const { foodSimplify } = require('../utils/utils');

/**
 * @controller singleFoodController
 * @desc
 * @return
 */
const singleFoodController = (req, res) => {
  let isRelated = req.query.related == 'true' ? true : undefined;
  let id = req.params.id;

  Food.findById(id)
    .populate('category')
    .then(food => {
      if (!food) res.status(404).json({ success: false, message: 'Not Found' });

      let targetFood = foodSimplify(food);

      if (isRelated) {
        Food.find({ category: food.category._id }).then(foods => {
          if (foods.length > 0) {
            let relatedFoods = foods.map(foodSimplify);
            res.status(200).json({ success: true, targetFood, relatedFoods });
          } else res.status(200).json({ success: true, targetFood });
        });
      } else {
        res.status(200).json({ success: true, targetFood });
      }
    })
    .catch(err =>
      res.status(500).json({ success: false, message: err.message })
    );
};

/**
 * @controller foodsController
 * @desc
 * @return
 */
const foodsController = (req, res) => {
  let category = req.query.category ? req.query.category : undefined;
  let limit = parseInt(req.query.limit) || 12;
};

/**
 * @controller specialFoodsController
 * @desc
 * @return
 */
const specialFoodsController = (req, res) => {
  let limit = parseInt(req.query.limit) || 6;
};

/**
 * @controller topFoodsController
 * @desc
 * @return
 */
const topFoodsController = (req, res) => {
  let category = req.query.category ? req.query.category : undefined;
  let limit = parseInt(req.query.limit) || 12;

  Food.find()
    .sort({ sold: -1 })
    .limit(limit)
    .then(topFoods => {
      res.status(200).json({ success: true, topFoods });
    })
    .catch(err => {
      res.status(500).json({ success: false, errors: err });
    });
};

module.exports = {
  singleFoodController,
  foodsController,
  specialFoodsController,
  topFoodsController
};
