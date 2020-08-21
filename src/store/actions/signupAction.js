import * as Types from "./actionTypes";

/**
 *  SignUp - Tradiational way
 */
const Fields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "password",
  "confirmPassword",
];

export const signUp = (userInfo) => {
  return {
    type: Types.SIGNUP_REQUEST,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    phone: userInfo.phone,
    password: userInfo.password,
    confirmPassword: userInfo.confirmPassword,
  };
};

export const signUpSuccess = (response) => {
  return {
    type: Types.SIGNUP_SUCCESS,
    payload: response.responseBody,
  };
};

export const signUpFailure = (error) => {
  const err = error.responseBody.errors;
  const errorData = {};
  for (let item in Fields) {
    if (err.hasOwnProperty(Fields[item])) {
      errorData[Fields[item]] = err[Fields[item]][0];
    } else {
      errorData[Fields[item]] = "";
    }
  }
  return {
    type: Types.SIGNUP_FAILURE,
    payload: errorData,
  };
};
