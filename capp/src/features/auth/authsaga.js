import { call, put, takeLatest } from 'redux-saga/effects';
import { loginAPI } from './authapi';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from './authslice';

function* handleLogin(action) {
  try {
    const user = yield call(loginAPI, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
