export enum SettingsActionTypes {
  API_RESPONSE_SUCCESS = "@@settings/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@settings/API_RESPONSE_ERROR",

  GET_USER_SETTINGS = "@@calls/GET_USER_SETTINGS",
}
export interface SettingsState {
  settings: object;
}
