/**
 * userController.js
 *
 * @module      :: Controller
 * @description :: defination of users routes action
 * @author      :: Joshim Uddin
 */
const gravatar = require('gravatar');

// Load User Model
const User = require('../models/Users');

const { validateRegisterInput } = require('../validator/validator');

/**
 * @controller Register
 * @desc register a users to the database...
 * @return
 */
const registerController = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.json(errors);
  }

  let { firstName, lastName, email, password, mobile } = req.body;
  // check email exist or not. If not exist then store to the database.
  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.isAccount = true;
        errors.msg = 'Account already exist';
        return res.status(409).json(errors);
      }

      const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        mobile,
        avatar
      });

      newUser
        .save()
        .then(user => res.status(201).json({ success: true, user }))
        .catch(err => res.json({ success: false, errors: err }));
    })
    .catch(err => res.json({ success: false, errors: err }));
};

module.exports = {
  registerController
};
