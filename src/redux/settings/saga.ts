import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { SettingsActionTypes } from "./types";
import {
  settingsApiResponseSuccess,
  settingsApiResponseError,
} from "./actions";

import { getSettings as getSettingsApi } from "../../api/index";

function* getSettings() {
  try {
    const response: Promise<any> = yield call(getSettingsApi);
    yield put(
      settingsApiResponseSuccess(
        SettingsActionTypes.GET_USER_SETTINGS,
        response
      )
    );
  } catch (error: any) {
    yield put(
      settingsApiResponseError(SettingsActionTypes.GET_USER_SETTINGS, error)
    );
  }
}

export function* watchGetSettings() {
  yield takeEvery(SettingsActionTypes.GET_USER_SETTINGS, getSettings);
}

function* settingsSaga() {
  yield all([fork(watchGetSettings)]);
}

export default settingsSaga;
