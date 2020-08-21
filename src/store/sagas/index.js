import { takeEvery } from "redux-saga/effects";

import * as Types from "../actions/actionTypes";
import { loginSaga } from "./authSaga";

export function* rootSaga() {
  yield takeEvery(Types.LOGIN_REQUEST, loginSaga);
}
