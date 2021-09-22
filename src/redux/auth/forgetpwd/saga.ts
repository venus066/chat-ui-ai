import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { AuthForgetPassActionTypes } from "./types";
import {
  authForgetPassApiResponseSuccess,
  authForgetPassApiResponseError,
} from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";

import { postFakeForgetPwd, postJwtForgetPwd } from "../../../api/index";

const fireBaseBackend: any = getFirebaseBackend();

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* forgetUser({ payload: user }: any) {
  try {
    console.log("in this");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      yield call(fireBaseBackend.forgetPassword, user.email);
      yield put(
        authForgetPassApiResponseSuccess(
          AuthForgetPassActionTypes.FORGET_PASSWORD,
          "Reset link are sended to your mailbox, check there first"
        )
      );
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      yield call(postJwtForgetPwd, {
        email: user.email,
      });
      yield put(
        authForgetPassApiResponseSuccess(
          AuthForgetPassActionTypes.FORGET_PASSWORD,
          "Reset link are sended to your mailbox, check there first"
        )
      );
    } else {
      yield call(postFakeForgetPwd, {
        email: user.email,
      });
      yield put(
        authForgetPassApiResponseSuccess(
          AuthForgetPassActionTypes.FORGET_PASSWORD,
          "Reset link are sended to your mailbox, check there first"
        )
      );
    }
  } catch (error: any) {
    yield put(
      authForgetPassApiResponseError(
        AuthForgetPassActionTypes.FORGET_PASSWORD,
        error
      )
    );
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(AuthForgetPassActionTypes.FORGET_PASSWORD, forgetUser);
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget)]);
}

export default forgetPasswordSaga;
