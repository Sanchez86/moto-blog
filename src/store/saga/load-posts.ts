import { takeEvery, put } from 'redux-saga/effects';
import API from 'utils/api';

import {
  loadPostsRequest,
  loadPostsResponse,
  loadPostsFailure,
} from '../actions/load-posts';

interface IResult {
  items: any[]
}

function* workerLoadPosts() { // worker
  try {
    const result: IResult = yield API.getPosts(); // получаю посты
    const newArr = result.items.map((item:any) => ({ ...item, isLoading: false }));
    yield put(loadPostsResponse(newArr)); // сетаем посты в стор
  } catch (error: any) {
    if (error && error.message) {
      yield put(loadPostsFailure(error.message)); // сетаем ошибку в стор
    } else {
      yield put(loadPostsFailure('Network Error')); // сетаем ошибку в стор
    }
  }
}

export default function* watcherLoadPosts() { // watcher
  yield takeEvery(loadPostsRequest, workerLoadPosts);
}
