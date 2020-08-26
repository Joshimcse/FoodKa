import { takeEvery } from "redux-saga/effects";

import * as Types from "../actions/actionTypes";
import { loginSaga } from "./authSaga";
import { signupSaga } from "./signupSaga";

export function* rootSaga() {
  yield takeEvery(Types.LOGIN_REQUEST, loginSaga);
  yield takeEvery(Types.SIGNUP_REQUEST, signupSaga);
}
