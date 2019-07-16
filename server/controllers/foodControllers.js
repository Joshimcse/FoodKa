/**
 * foodController.js
 *
 * @module      :: Controller
 * @description :: Definitions of foods routes action
 * @author      :: Akibur Rahman
 */

// Load Food and Category Model
const Food = require('../models/Food');
const Category = require('../models/Category');

/**
 * @controller singleFood
 * @desc find specific product by product id
 * @return 
 */

const singleFoodController = (req, res) => {
    const { id } = req.params;
    const { related } = req.query;

    Food.findById(id)
        .populate('category') // replace category property value id to original document
        .then(food => {

            // if food undefined or null 
            if (!food) {
                const error = new Error('No product found by this id.');
                throw error;
            }

            if (related) {
                Food.find({ category: food.category._id })
                    .then(relatedFoods => {
                        res.status(200).json({ success: true, targetedFood: food, relatedFoods });
                    })
                    .catch(err => {
                        res.status(500).json({ success: false, errors: err });
                    });
            } else {
                res.status(200).json({ success: true, food });
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, errors: err });
        })
};

/**
 * @controller Foods controller
 * @desc Find foods with category if category exists. if not exists find and without category.
 * @return Array of foods.
 */

const foodsController = (req, res) => {
    const category = req.query.category;
    const limit = Number(req.query.limit) || 12;

    if (category) {
        // here will be category wise food logic 
    } else {
        Food.find().limit(limit)
            .then(foods => {
                if (!foods) {
                    const error = new Error('No product found by this id.');
                    throw error;
                }
                res.status(200).json({ success: true, foods });
            })
            .catch(err => {
                res.status(500).json({ success: false, errors: err });
            })
    }

}

/**
* @controller 
* @desc 
* @return 
*/

const specialFoodsController = (req, res) => {
    // here will be special foods query logic
}

/**
* @controller for top foods
* @desc find products sold more then 9.
* @return Array of best selling food.
*/

const topFoodsController = (req, res) => {
    
    Food.find({ sold: { $gte: 10 } })
        .then(topFoods => {
            res.status(200).json({ success: true, topFoods })
        })
        .catch(err => {
            res.status(500).json({ success: false, errors: err })
        });
}

module.exports = {
    singleFoodController,
    foodsController,
    specialFoodsController,
    topFoodsController
}