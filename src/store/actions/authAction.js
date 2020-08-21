import * as Types from "./actionTypes";

export const auth = (email, password) => {
  return {
    type: Types.LOGIN_REQUEST,
    email: email,
    password: password,
  };
};
