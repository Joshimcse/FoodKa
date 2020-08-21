import { takeEvery } from "redux-saga/effects";

import * as Tyoes from "../actions/actionTypes";
import { authSaga } from "./authSaga";

export function* rootSaga() {
  yield takeEvery(Tyoes.LOGIN_REQUEST, authSaga);
}
