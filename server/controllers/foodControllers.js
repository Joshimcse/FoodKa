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
    let targetedFood;

    Food.findById(id)
        .populate('category')
        .then(food => {

            if (!food) {
                const error = new Error('No product found by this id.');
                throw error;
            }

            targetedFood = food;

            if (related) {
                Food.find({ category: targetedFood.category._id })
                    .then(relatedFoods => {
                        res.status(200).json({ success: true, targetedFood, relatedFoods });
                    })
                    .catch(err => {
                        res.status(500).json({ success: false, errors: err });
                    });
            } else {
                res.status(200).json({ success: true, targetedFood });
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, errors: err });
        })
};

/**
 * @controller foods controllers
 * @desc 
 * @return 
 */

const foodsController = (req, res) => {
    

    
}

/**
* @controller 
* @desc 
* @return 
*/

const specialFoodsController = (req, res) => {

}

/**
* @controller 
* @desc 
* @return 
*/

const topFoodsController = (req, res) => {

}

module.exports = {
    singleFoodController,
    foodsController,
    specialFoodsController,
    topFoodsController
}