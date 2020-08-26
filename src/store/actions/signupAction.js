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
    userInfo: userInfo,
  };
};

export const signUpSuccess = (response) => {
  return {
    type: Types.SIGNUP_SUCCESS,
    payload: response,
  };
};

export const signUpFailure = (error) => {
  const err = error.response.data.errors;
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
