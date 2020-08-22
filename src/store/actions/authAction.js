import * as Types from "./actionTypes";
import jwtDecode from "jwt-decode";

/**
 * Login with Log In Form
 */
const Fields = ["email", "password"];
export const login = (userInfo) => {
  return {
    type: Types.LOGIN_REQUEST,
    userInfo: userInfo,
  };
};

export const loginSuccess = (response) => {
  console.log(response);
  const user = jwtDecode(response.token);
  return {
    type: Types.LOGIN_SUCCESS,
    payload: {
      user: user,
      token: response.token,
      isLoggedIn: response.isLoggedIn,
    },
  };
};

export const loginFailure = (error) => {
  console.log(error.response.data);
  const err = error.response.data.errors;
  const errorData = {};
  for (let item in Fields) {
    if (err.hasOwnProperty(Fields[item])) {
      errorData[Fields[item]] = err[Fields[item]];
    } else {
      errorData[Fields[item]] = "";
    }
  }
  return {
    type: Types.LOGIN_FAILURE,
    payload: errorData,
  };
};

/**
 *  Facebook Login/SignUp
 */

export const facebookLogin = (userInfo) => {
  return {
    type: Types.FB_LOGIN_REQUEST,
    name: userInfo.name,
    email: userInfo.email,
    token: userInfo.token,
  };
};

export const facebookLoginSuccess = (token, userInfo) => {
  return {
    type: Types.FB_LOGIN_SUCCESS,
    payload: {
      token: token,
      user: userInfo,
    },
  };
};

export const facebookLoginFailure = (error) => {
  return {
    type: Types.FB_LOGIN_FAILURE,
  };
};

/**
 *  Google Login/SignUp
 */

export const googleLogin = (userInfo) => {
  return {
    type: Types.GOOGLE_LOGIN_REQUEST,
    name: userInfo.name,
    email: userInfo.email,
    token: userInfo.token,
  };
};

export const googleLoginSuccess = (token, userInfo) => {
  return {
    type: Types.GOOGLE_LOGIN_SUCCESS,
    payload: {
      token: token,
      user: userInfo,
    },
  };
};

export const googleLoginFailure = (error) => {
  return {
    type: Types.GOOGLE_LOGIN_FAILURE,
  };
};

/**
 * Logout - For All Type
 */
export const logout = (history) => {
  return {
    type: Types.LOGOUT_REQUEST,
    history: history,
  };
};

export const logoutSuccess = (history) => {
  // history.push("/some_url")
  return {
    type: Types.LOGOUT_REQUEST,
  };
};

export const logoutFailure = (error) => {
  return {
    type: Types.LOGOUT_FAILURE,
    payload: error,
  };
};
