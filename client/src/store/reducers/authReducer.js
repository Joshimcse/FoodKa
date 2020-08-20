import * as Types from "../actions/actionTypes";

const init = {
  isAuthenticated: false,
  user: {},
  error: {
    username: "",
    password: "",
    non_field_errors: "",
    detail: "",
  },
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: Object.keys(action.payload.user).length !== 0,
        error: {},
      };
    }
    case Types.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case Types.LOGOUT_USER: {
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
