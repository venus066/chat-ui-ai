import { all, call, fork, put, takeEvery } from "redux-saga/effects";
// Login Redux States
import { CallsActionTypes } from "./types";
import { callsApiResponseError, callsApiResponseSuccess } from "./actions";

import { getCalls as getCallsApi } from "../../api/index";

function* getCalls() {
  try {
    const response: Promise<any> = yield call(getCallsApi);
    yield put(callsApiResponseSuccess(CallsActionTypes.GET_CALLS, response));
  } catch (error: any) {
    yield put(callsApiResponseError(CallsActionTypes.GET_CALLS, error));
  }
}

export function* watchGetCalls() {
  yield takeEvery(CallsActionTypes.GET_CALLS, getCalls);
}

function* callsSaga() {
  yield all([fork(watchGetCalls)]);
}

export default callsSaga;
