export enum ChatsActionTypes {
  API_RESPONSE_SUCCESS = "@@chats/API_RESPONSE_SUCCESS",
  API_RESPONSE_ERROR = "@@chats/API_RESPONSE_ERROR",

  GET_FAVOURITES = "@@chats/GET_FAVOURITES",
  GET_DIRECT_MESSAGES = "@@chats/GET_DIRECT_MESSAGES",
  GET_CHANNELS = "@@chats/GET_CHANNELS",

  ADD_CONTACTS = "@@chats/ADD_CONTACTS",
  CREATE_CHANNEL = "@@chats/CREATE_CHANNEL",
  CHANGE_SELECTED_CHAT = "@@chats/CHANGE_SELECTED_CHAT",
  GET_CHAT_USER_DETAILS = "@@chats/GET_CHAT_USER_DETAILS",
  GET_CHAT_USER_CONVERSATIONS = "@@chats/GET_CHAT_USER_CONVERSATIONS",
  TOGGLE_USER_DETAILS_TAB = "@@chats/TOGGLE_USER_DETAILS_TAB",
}
export interface ChatsState {
  favourites: Array<any>;
  directMessages: Array<any>;
  channels: Array<any>;
  selectedChat: string | number | null;
  chatUserDetails: object;
  chatUserConversations: Array<any>;
  isOpenUserDetails: boolean;
}
