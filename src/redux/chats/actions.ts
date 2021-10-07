import { ChatsActionTypes } from "./types";

// common success
export const chatsApiResponseSuccess = (actionType: string, data: any) => ({
  type: ChatsActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const chatsApiResponseError = (
  actionType: string,
  error: string
) => ({
  type: ChatsActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getFavourites = () => ({
  type: ChatsActionTypes.GET_FAVOURITES,
});

export const getDirectMessages = () => ({
  type: ChatsActionTypes.GET_DIRECT_MESSAGES,
});

export const getChannels = () => ({
  type: ChatsActionTypes.GET_CHANNELS,
});

export const addContacts = (contacts: Array<string | number>) => ({
  type: ChatsActionTypes.ADD_CONTACTS,
  payload: contacts
});

export interface CreateChannelPostData {
  name: string;
  members: Array<string | number>;
  description?: string;
}
export const createChannel = (channelData: CreateChannelPostData) => ({
  type: ChatsActionTypes.CREATE_CHANNEL,
  payload: channelData
});
