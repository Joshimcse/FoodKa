import axios from "axios";
import { put } from "redux-saga/effects";
import * as Actions from "../actions";
import { base_url } from "../../config";

export function* loginSaga(action) {
  const userInfo = action.userInfo;

  try {
    const response = yield axios.post(base_url + "auth/login/", userInfo);
    //console.log(response);
    if (response.status >= 200 && response.status < 300) {
      localStorage.setItem("token-Foodka", response.data.token);
      yield put(Actions.loginSuccess(response.data));
    }
  } catch (error) {
    //console.log(error);
    yield put(Actions.loginFailure(error));
  }
}
