import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

const getFavourites = () => {
  return api.get(url.GET_FAVOURITES);
};

const getDirectMessages = () => {
  return api.get(url.GET_DIRECT_MESSAGES);
};
const getChannels = () => {
  return api.get(url.GET_CHANNELS);
};

const addContacts = (contacts: Array<string | number>) => {
  return api.create(url.ADD_CONTACTS, contacts);
};

const createChannel = (data: object) => {
  return api.create(url.CREATE_CHANNEL, data);
};

const getChatUserDetails = (id: string | number) => {
  return api.get(url.GET_CHAT_USER_DETAILS + "/" + id, { params: { id } });
};

const getChatUserConversations = (id: string | number) => {
  return api.get(url.GET_CHAT_USER_CONVERSATIONS + "/" + id, {
    params: { id },
  });
};

const sendMessage = (data: object) => {
  return api.create(url.SEND_MESSAGE, data);
};

const receiveMessage = (id: string | number) => {
  return api.update(url.RECEIVE_MESSAGE + "/" + id, { params: { id } });
};

const readMessage = (id: string | number) => {
  return api.update(url.READ_MESSAGE + "/" + id, { params: { id } });
};
const receiveMessageFromUser = (id: string | number) => {
  return api.get(url.RECEIVE_MESSAGE_FROM_USER + "/" + id, {
    params: { id },
  });
};

export {
  getFavourites,
  getDirectMessages,
  getChannels,
  addContacts,
  createChannel,
  getChatUserDetails,
  getChatUserConversations,
  sendMessage, receiveMessage, readMessage, receiveMessageFromUser
};
