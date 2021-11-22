import { fork } from 'redux-saga/effects';
import watcherLoadPosts from './load-posts';

export default function* rootSaga() {
  yield fork(watcherLoadPosts);
}
