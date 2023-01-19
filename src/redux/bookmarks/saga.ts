import { all, call, fork, put, takeEvery } from "redux-saga/effects";
// Redux State
import { BookmarksActionTypes } from "./types";
// actions
import { bookmarksApiResponseError, bookmarksApiResponseSuccess } from "./actions";
// api
import {
  deleteBookmark as deleteBookmarkApi,
  getBookmarks as getBookmarksApi,
  updateBookmark as updateBookmarkApi
} from "../../api/index";
// helpers
import { showErrorNotification, showSuccessNotification } from "../../helpers/notifications";

function* getBookmarks() {
  try {
    const response: Promise<any> = yield call(getBookmarksApi);
    yield put(
      bookmarksApiResponseSuccess(BookmarksActionTypes.GET_BOOKMARKS, response)
    );
  } catch (error: any) {
    yield put(
      bookmarksApiResponseError(BookmarksActionTypes.GET_BOOKMARKS, error)
    );
  }
}

function* updateBookmark({ payload: { id, data } }: any) {
  try {
    const response: Promise<any> = yield call(updateBookmarkApi, id, data);
    yield put(
      bookmarksApiResponseSuccess(
        BookmarksActionTypes.UPDATE_BOOKMARK,
        response
      )
    );
    yield call(showSuccessNotification, response + "");
  } catch (error: any) {
    yield call(showErrorNotification, error);
    yield put(
      bookmarksApiResponseError(BookmarksActionTypes.UPDATE_BOOKMARK, error)
    );
  }
}

function* deleteBookmark({ payload: id }: any) {
  try {
    const response: Promise<any> = yield call(deleteBookmarkApi, id);
    yield put(
      bookmarksApiResponseSuccess(
        BookmarksActionTypes.DELETE_BOOKMARK,
        response
      )
    );
    yield call(showSuccessNotification, response + "");
  } catch (error: any) {
    yield call(showErrorNotification, error);
    yield put(
      bookmarksApiResponseError(BookmarksActionTypes.DELETE_BOOKMARK, error)
    );
  }
}

export function* watchGetCalls() {
  yield takeEvery(BookmarksActionTypes.GET_BOOKMARKS, getBookmarks);
}

export function* watchUpdateBookmark() {
  yield takeEvery(BookmarksActionTypes.UPDATE_BOOKMARK, updateBookmark);
}
export function* watchDeleteBookmark() {
  yield takeEvery(BookmarksActionTypes.DELETE_BOOKMARK, deleteBookmark);
}
function* bookmarksSaga() {
  yield all([
    fork(watchGetCalls),
    fork(watchUpdateBookmark),
    fork(watchDeleteBookmark),
  ]);
}

export default bookmarksSaga;
