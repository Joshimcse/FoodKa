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
    return res.json({ success: false, msg: { ...errors } });
  }

  let { firstName, lastName, email, password, mobile } = req.body;

  // check email exist or not. If not exist then store to the database.
  User.findOne({ $or: [{ email }, { mobile }] })
    .then(user => {
      if (user) {
        if (email == user.email) {
          errors.email = 'Email already exist';
        }

        if (mobile == user.mobile) {
          errors.mobile = 'Mobile Number is already exist';
        }

        return res.status(409).json({ success: false, msg: { ...errors } });
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
        .catch(err => res.status(204).json({ success: false, errors: err }));
    })
    .catch(err => {
      console.log(err);
      return res.json({ success: false, errors: err });
    });
};

module.exports = {
  registerController
};
