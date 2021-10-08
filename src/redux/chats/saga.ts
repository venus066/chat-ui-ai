import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { ChatsActionTypes } from "./types";
import { chatsApiResponseSuccess, chatsApiResponseError } from "./actions";

import {
  getFavourites as getFavouritesApi,
  getDirectMessages as getDirectMessagesApi,
  getChannels as getChannelsApi,
  addContacts as addContactsApi,
  createChannel as createChannelApi,
  getChatUserDetails as getChatUserDetailsApi,
  getChatUserConversations as getChatUserConversationsApi,
} from "../../api/index";

import {
  showSuccessNotification,
  showErrorNotification,
} from "../../helpers/notifications";

function* getFavourites() {
  try {
    const response: Promise<any> = yield call(getFavouritesApi);
    yield put(
      chatsApiResponseSuccess(ChatsActionTypes.GET_FAVOURITES, response)
    );
  } catch (error: any) {
    yield put(chatsApiResponseError(ChatsActionTypes.GET_FAVOURITES, error));
  }
}

function* getDirectMessages() {
  try {
    const response: Promise<any> = yield call(getDirectMessagesApi);
    yield put(
      chatsApiResponseSuccess(ChatsActionTypes.GET_DIRECT_MESSAGES, response)
    );
  } catch (error: any) {
    console.log(error);
    yield put(
      chatsApiResponseError(ChatsActionTypes.GET_DIRECT_MESSAGES, error)
    );
  }
}

function* getChannels() {
  try {
    const response: Promise<any> = yield call(getChannelsApi);
    yield put(chatsApiResponseSuccess(ChatsActionTypes.GET_CHANNELS, response));
  } catch (error: any) {
    yield put(chatsApiResponseError(ChatsActionTypes.GET_CHANNELS, error));
  }
}

function* addContacts({ payload: contacts }: any) {
  try {
    const response: Promise<any> = yield call(addContactsApi, contacts);
    yield put(chatsApiResponseSuccess(ChatsActionTypes.ADD_CONTACTS, response));
    yield call(showSuccessNotification, response + "");
  } catch (error: any) {
    yield call(showErrorNotification, error);
    yield put(chatsApiResponseError(ChatsActionTypes.ADD_CONTACTS, error));
  }
}
function* createChannel({ payload: channelData }: any) {
  try {
    const response: Promise<any> = yield call(createChannelApi, channelData);
    yield put(
      chatsApiResponseSuccess(ChatsActionTypes.CREATE_CHANNEL, response)
    );
    yield call(showSuccessNotification, response + "");
  } catch (error: any) {
    yield call(showErrorNotification, error);
    yield put(chatsApiResponseError(ChatsActionTypes.CREATE_CHANNEL, error));
  }
}

function* getChatUserDetails({ payload: id }: any) {
  try {
    const response: Promise<any> = yield call(getChatUserDetailsApi, id);
    yield put(
      chatsApiResponseSuccess(ChatsActionTypes.GET_CHAT_USER_DETAILS, response)
    );
  } catch (error: any) {
    yield put(
      chatsApiResponseError(ChatsActionTypes.GET_CHAT_USER_DETAILS, error)
    );
  }
}

function* getChatUserConversations({ payload: id }: any) {
  try {
    const response: Promise<any> = yield call(getChatUserConversationsApi, id);
    yield put(
      chatsApiResponseSuccess(
        ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS,
        response
      )
    );
  } catch (error: any) {
    yield put(
      chatsApiResponseError(ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS, error)
    );
  }
}

export function* watchGetFavourites() {
  yield takeEvery(ChatsActionTypes.GET_FAVOURITES, getFavourites);
}

export function* watchGetDirectMessages() {
  yield takeEvery(ChatsActionTypes.GET_DIRECT_MESSAGES, getDirectMessages);
}
export function* watchGetChannels() {
  yield takeEvery(ChatsActionTypes.GET_CHANNELS, getChannels);
}
export function* watchAddContacts() {
  yield takeEvery(ChatsActionTypes.ADD_CONTACTS, addContacts);
}
export function* watchCreateChannel() {
  yield takeEvery(ChatsActionTypes.CREATE_CHANNEL, createChannel);
}
export function* watchGetChatUserDetails() {
  yield takeEvery(ChatsActionTypes.GET_CHAT_USER_DETAILS, getChatUserDetails);
}
export function* watchGetChatUserConversations() {
  yield takeEvery(
    ChatsActionTypes.GET_CHAT_USER_CONVERSATIONS,
    getChatUserConversations
  );
}
function* chatsSaga() {
  yield all([
    fork(watchGetFavourites),
    fork(watchGetDirectMessages),
    fork(watchGetChannels),
    fork(watchAddContacts),
    fork(watchCreateChannel),
    fork(watchGetChatUserDetails),
    fork(watchGetChatUserConversations),
  ]);
}

export default chatsSaga;
