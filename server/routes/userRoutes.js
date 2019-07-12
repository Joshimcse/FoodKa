/**
 * users.js
 *
 * @module      :: Routes
 * @description :: Users routes and action
 * @author      :: Joshim Uddin
 */

const router = require('express').Router();

// Middlewares
const { auth } = require('../middleware/auth');

//Controller functionality
const {
  registerController,
  loginController,
  logoutController,
  authInfoController
} = require('../controllers/userControllers');

/**
 * @route  POST api/users/register
 * @desc   Register an user
 * @access Public
 */
router.post('/register', registerController);

/**
 * @route  POST api/users/login
 * @desc   Send user info to server && check it valid or not.
 * @access Public
 */
router.post('/login', loginController);

/**
 * @route  GET api/users/logout
 * @desc   
 * @access
 */
router.get('/logout', auth, logoutController);

/**
 * @route  GET api/users/auth-info
 * @desc   
 * @access Public
 */
router.get('/auth-info', auth, authInfoController);

module.exports = router;
