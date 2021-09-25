import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

const getProfileDetails = (data: object) => {
  return api.get(url.GET_PROFILE_DETAILS, data);
};

export { getProfileDetails };
