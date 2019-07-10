/**
 * users.js
 *
 * @module      :: Routes
 * @description :: Users routes and action
 * @author      :: Joshim Uddin
 */

const router = require('express').Router();

//Controller functionality
const {
  registerController
} = require('../controllers/users');

/**
 * @route  POST api/users/register
 * @desc   Register an user
 * @access Public
 */
router.post('/register', registerController);

module.exports = router;
