import axios from "axios";
import { put } from "redux-saga/effects";
import * as Actions from "../actions";
import { base_url } from "../../config";

export function* signupSaga(action) {
  const userInfo = action.userInfo;
  userInfo.firstName = userInfo.name;
  userInfo.lastName = userInfo.name;
  userInfo.phone = "01967101375";
  try {
    const response = yield axios.post(base_url + "auth/signup/", userInfo);
    //console.log(response);
    if (response.status >= 200 && response.status < 300) {
      yield put(Actions.signUpSuccess(response.data));
    }
  } catch (error) {
    //console.log(error);
    yield put(Actions.signUpFailure(error));
  }
}
