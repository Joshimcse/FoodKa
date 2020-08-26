import * as Types from "../actions/actionTypes";

const init = {
  response: "",
  error: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  },
};

const signupReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SIGNUP_SUCCESS: {
      return {
        ...state,
        response: action.payload.success ? "resolved" : "",
        error: {},
      };
    }
    case Types.SIGNUP_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default signupReducer;
