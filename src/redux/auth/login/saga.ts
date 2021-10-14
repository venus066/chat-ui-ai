import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { AuthLoginActionTypes } from "./types";
import {
  authLoginApiResponseSuccess,
  authLoginApiResponseError,
} from "./actions";

//Include Both Helper File with needed methods
import {
  getFirebaseBackend,
  setLoggeedInUser,
} from "../../../helpers/firebase_helper";
import { postFakeLogin, postJwtLogin } from "../../../api/index";

const fireBaseBackend = getFirebaseBackend();

function* loginUser({ payload: { user } }: any) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response: Promise<any> = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      // myData
      yield put(
        authLoginApiResponseSuccess(AuthLoginActionTypes.LOGIN_USER, response)
      );
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response: Promise<any> = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      setLoggeedInUser(response);
      yield put(
        authLoginApiResponseSuccess(AuthLoginActionTypes.LOGIN_USER, response)
      );
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      const response: Promise<any> = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      });
      setLoggeedInUser(response);
      yield put(
        authLoginApiResponseSuccess(AuthLoginActionTypes.LOGIN_USER, response)
      );
    }
  } catch (error: any) {
    console.log(error);
    // yield put(
    //   authLoginApiResponseError(AuthLoginActionTypes.LOGIN_USER, error)
    // );
  }
}

function* logoutUser() {
  try {
    localStorage.removeItem("authUser");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response: Promise<any> = yield call(fireBaseBackend.logout);
      yield put(
        authLoginApiResponseSuccess(AuthLoginActionTypes.LOGOUT_USER, response)
      );
    } else {
      yield put(
        authLoginApiResponseSuccess(AuthLoginActionTypes.LOGOUT_USER, true)
      );
    }
  } catch (error: any) {
    yield put(
      authLoginApiResponseError(AuthLoginActionTypes.LOGOUT_USER, error)
    );
  }
}

function* loginSaga() {
  yield takeEvery(AuthLoginActionTypes.LOGIN_USER, loginUser);
  yield takeEvery(AuthLoginActionTypes.LOGOUT_USER, logoutUser);
}

export default loginSaga;
