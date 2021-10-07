export enum ChatsActionTypes {
  API_RESPONSE_SUCCESS = "@@chats/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@chats/API_RESPONSE_ERROR",

  GET_FAVOURITES = "@@chats/GET_FAVOURITES",
  GET_DIRECT_MESSAGES = "@@chats/GET_DIRECT_MESSAGES",
  GET_CHANNELS = "@@chats/GET_CHANNELS",

  ADD_CONTACTS = "@@chats/ADD_CONTACTS",
}
export interface ChatsState {
  favourites: Array<any>;
  directMessages: Array<any>;
  channels: Array<any>;
}
