import { combineReducers } from "redux";

import ForgetPassword from "./auth/forgetpwd/reducer";
import Login from "./auth/login/reducer";
import Register from "./auth/register/reducer";
import Layout from "./layout/reducer";
import Profile from "./profile/reducer";

export default combineReducers({
  ForgetPassword,
  Login,
  Register,
  Layout,
  Profile,
});
