import { all, call, fork, put, takeEvery } from "redux-saga/effects";
// Login Redux States
import { ProfileActionTypes } from "./types";
import { profileApiResponseError, profileApiResponseSuccess } from "./actions";

import { getProfileDetails as getProfileDetailsApi } from "../../api/index";

function* getProfileDetails() {
  try {
    const response: Promise<any> = yield call(getProfileDetailsApi);
    yield put(
      profileApiResponseSuccess(
        ProfileActionTypes.GET_PROFILE_DETAILS,
        response
      )
    );
  } catch (error: any) {
    yield put(
      profileApiResponseError(ProfileActionTypes.GET_PROFILE_DETAILS, error)
    );
  }
}

export function* watchGetProfileDetails() {
  yield takeEvery(ProfileActionTypes.GET_PROFILE_DETAILS, getProfileDetails);
}

function* profileSaga() {
  yield all([fork(watchGetProfileDetails)]);
}

export default profileSaga;
