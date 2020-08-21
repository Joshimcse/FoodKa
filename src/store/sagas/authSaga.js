import axios from "axios";
import * as Actions from "../actions";
import { put } from "redux-saga/effects";

export function* loginSaga(action) {
  /*const username = action.emailOrPhone;
  const password = action.password;
  let data = {};
  data.username = username;
  data.password = password;
  try {
    const response = yield axios.post(
      "http://ec2-15-206-166-219.ap-south-1.compute.amazonaws.com/api/login/",
      data
    );
    yield put(Actions.loginSuccess(response));
  } catch (error) {
    //console.log(error);
    yield put(Actions.loginFailure(error));
  }*/
}
