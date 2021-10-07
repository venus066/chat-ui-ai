import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { ChatsActionTypes } from "./types";
import {
  chatsApiResponseSuccess,
  chatsApiResponseError,
} from "./actions";

import {
  getFavourites as getFavouritesApi, getDirectMessages as getDirectMessagesApi, getChannels as getChannelsApi
} from "../../api/index";

function* getFavourites() {
  try {
    const response: Promise<any> = yield call(getFavouritesApi);
    yield put(
      chatsApiResponseSuccess(
        ChatsActionTypes.GET_FAVOURITES,
        response
      )
    );
  } catch (error: any) {
    yield put(
      chatsApiResponseError(ChatsActionTypes.GET_FAVOURITES, error)
    );
  }
}

function* getDirectMessages() {
  try {
    const response: Promise<any> = yield call(getDirectMessagesApi);
    yield put(
      chatsApiResponseSuccess(
        ChatsActionTypes.GET_DIRECT_MESSAGES,
        response
      )
    );
  } catch (error: any) {
    yield put(
      chatsApiResponseError(ChatsActionTypes.GET_DIRECT_MESSAGES, error)
    );
  }
}

function* getChannels() {
  try {
    const response: Promise<any> = yield call(getChannelsApi);
    yield put(
      chatsApiResponseSuccess(
        ChatsActionTypes.GET_CHANNELS,
        response
      )
    );
  } catch (error: any) {
    yield put(
      chatsApiResponseError(ChatsActionTypes.GET_CHANNELS, error)
    );
  }
}


export function* watchGetFavourites() {
  yield takeEvery(ChatsActionTypes.GET_FAVOURITES, getFavourites);
}

export function* watchGetDirectMessages() {
  yield takeEvery(ChatsActionTypes.GET_FAVOURITES, getDirectMessages);
}
export function* watchGetChannels() {
  yield takeEvery(ChatsActionTypes.GET_FAVOURITES, getChannels);
}
function* chatsSaga() {
  yield all([
    fork(watchGetFavourites),
    fork(watchGetDirectMessages),
    fork(watchGetChannels)
  ]);
}

export default chatsSaga;
