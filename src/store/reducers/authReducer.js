import * as Types from "../actions/actionTypes";

const init = {
  isAuthenticated: false,
  user: {},
  error: {
    emailOrPhone: "",
    password: "",
  },
  response: "",
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS: {
      return {
        ...state,
        //user: action.payload.user,
        isAuthenticated: action.payload.isLoggedIn,
        error: {},
        response: "resolved",
      };
    }
    case Types.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        response: "rejected",
      };
    }
    case Types.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    }
    default:
      return state;
  }
};

export default authReducer;
