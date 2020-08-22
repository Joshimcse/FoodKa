import axios from "axios";
import { put } from "redux-saga/effects";
import * as Actions from "../actions";
import { base_url } from "../../config";

export function* loginSaga(action) {
  const userInfo = action.userInfo;

  try {
    const response = yield axios.post(base_url + "auth/login/", userInfo);
    yield put(Actions.loginSuccess(response));
  } catch (error) {
    //console.log(error);
    yield put(Actions.loginFailure(error));
  }
}
