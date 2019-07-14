const validator = require('validator');
const isEmpty = require('./is-empty');
const isBdNumber = require('./is-bd-number');

module.exports = {
  validateRegisterInput: data => {
    let errors = {};

    data.firstName = !isEmpty(data.firstName) ? data.firstName.trim() : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName.trim() : '';
    data.email = !isEmpty(data.email) ? data.email.trim() : '';
    data.phone = !isEmpty(data.phone) ? data.phone.trim() : '';
    data.password = !isEmpty(data.password) ? data.password.trim() : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword.trim() : '';

    if (!validator.isLength(data.firstName, { min: 2, max: 20 })) {
      errors.firstName = 'First Name must be between 2 and 20 characters.';
    }

    if (validator.isEmpty(data.firstName)) {
      errors.firstName = 'First Name field is required';
    }

    if (!validator.isLength(data.lastName, { min: 2, max: 20 })) {
      errors.lastName = 'Last Name must be between 2 and 30 characters.';
    }

    if (validator.isEmpty(data.lastName)) {
      errors.lastName = 'Last Name field is required';
    }

    if (!validator.isEmail(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (validator.isEmpty(data.email)) {
      errors.email = 'Email field is required';
    }

    if (!isBdNumber(data.phone)) {
      errors.phone = 'Phone Number is invalid';
    }

    if (validator.isEmpty(data.phone)) {
      errors.phone = 'Phone Number field is required';
    }

    if (validator.isEmpty(data.password)) {
      errors.password = 'Password field is required';
    }

    if (!validator.equals(data.password, data.password2)) {
      errors.password = 'Password must match.';
    }

    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (validator.isEmpty(data.password2)) {
      errors.confirmPassword = 'Confirm Password field is required';
    }

    const validationData = {
      isValid: isEmpty(errors),
      errors
    };

    validationData.data = validationData.isValid ? data : null;

    return validationData;
  },

  validateLoginInput: data => {
    let errors = {};

    data.emailOrPhone = !isEmpty(data.emailOrPhone)
      ? data.emailOrPhone.trim()
      : '';
    data.password = !isEmpty(data.password) ? data.password.trim() : '';

    if (
      !validator.isEmail(data.emailOrPhone) &&
      !isBdNumber(data.emailOrPhone)
    ) {
      errors.emailOrPhone = 'Email or Phone Number is not valid';
    }

    if (validator.isEmpty(data.emailOrPhone)) {
      errors.emailOrPhone = 'Email or Phone Number must be required';
    }

    if (validator.isEmpty(data.password)) {
      errors.password = 'Password field is required';
    }

    const validationData = {
      isValid: isEmpty(errors),
      errors
    };

    validationData.data = validationData.isValid ? data : null;

    return validationData;
  }
};
