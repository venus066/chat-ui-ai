import { combineReducers } from "redux";

import ForgetPass from "./auth/forgetpwd/reducer";
import Login from "./auth/login/reducer";
import Register from "./auth/register/reducer";

export default combineReducers({
  ForgetPass,
  Login,
  Register,
});
