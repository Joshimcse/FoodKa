import * as Types from "./actionTypes";

/**
 * Login with Log In Form
 */
const Fields = ["emailOrPhone", "password"];
export const login = (userInfo) => {
  return {
    type: Types.LOGIN_REQUEST,
    emailOrPhone: userInfo.emailOrPhone,
    password: userInfo.password,
  };
};

export const loginSuccess = (response) => {
  console.log(response);
  return {
    type: Types.LOGIN_SUCCESS,
    payload: response.responseBody,
  };
};

export const loginFailure = (error) => {
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
