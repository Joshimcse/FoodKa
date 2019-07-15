/**
 * foodRoutes.js
 *
 * @module      :: Routes
 * @description ::
 * @author      :: Joshim Uddin
 */

const router = require('express').Router();

//Controller functionality
const {} = require('../controllers/foodControllers');

/**
 * @route  GET api/foods/:id?related=true
 * @param  related {boolean} - [optional]
 * @desc   Return single food by id. if related is true then produce a foods array same as.
 * @access Public
 */
router.get('/:id', singleFoodController);

/**
 * @route  GET api/foods?category=fizza&limit=12
 * @param  limit {Number} - [optional - defaul is 12]
 * @param  category {String} - [optional]
 * @desc   Return a foods of array. if categories are define
 *         then produces categories wise foods and Default array size is 12
 * @access Public
 */
router.get('/', foodsController);

/**
 * @route  GET api/foods/specials
 * @param  limit {Number} - [optional - defaul is 6]
 * @desc   Returns foodka specials foods of array. if limit is not
 *         define, default array size is 6
 * @access Public
 */
router.get('/specials', specialFoodsController);

/**
 * @route  GET api/foods/top?category=fizza&limit=12
 * @param  limit {Number} - [optional - defaul is 12]
 * @param  category {String} - [optional]
 * @desc   Return foodka top selling foods of array.
 * @access Public
 */
router.get('/top', topFoodsController);

module.exports = router;
