import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./authReducer";
import signupReducer from "./signupReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    signupReducer,
  });

export default rootReducer;
