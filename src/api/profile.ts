import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

const getProfileDetails = () => {
  return api.get(url.GET_PROFILE_DETAILS);
};

const getSettings = () => {
  return api.get(url.GET_USER_SETTINGS);
};

export { getProfileDetails, getSettings };
