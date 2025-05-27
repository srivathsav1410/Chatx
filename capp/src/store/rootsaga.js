
import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/authsaga';
import chatSaga from '../features/chat/chatsaga'

export const rootSaga = function* root() {
  yield all([
    authSaga(),
    chatSaga(),
  ]);
}
export default rootSaga;
