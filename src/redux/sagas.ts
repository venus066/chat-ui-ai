import { all } from "redux-saga/effects";

//auth
import registerSaga from "./auth/register/saga";
import loginSaga from "./auth/login/saga";
import forgetPasswordSaga from "./auth/forgetpwd/saga";
import profileSaga from "./profile/saga";

export default function* rootSaga() {
  yield all([registerSaga(), loginSaga(), forgetPasswordSaga(), profileSaga()]);
}
