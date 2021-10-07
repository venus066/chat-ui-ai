export enum ChatsActionTypes {
  API_RESPONSE_SUCCESS = "@@settings/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@settings/API_RESPONSE_ERROR",

  GET_FAVOURITES = "@@calls/GET_FAVOURITES",
  GET_DIRECT_MESSAGES = "@@calls/GET_DIRECT_MESSAGES",
  GET_CHANNELS = "@@calls/GET_CHANNELS",
}
export interface ChatsState {
  favourites: Array<any>;
  directMessages: Array<any>;
  channels: Array<any>;
}
