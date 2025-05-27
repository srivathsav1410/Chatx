
import { call, put, takeLatest } from 'redux-saga/effects';
import { RegisterRequest, RegisterSuccess, RegisterFailure } from './registerslice';

import { RegisterAPI } from './registerapi';
function* RegisterSentSaga(action) {
  console.log("RegisterSaga called with action:", action);
  try {
    const data = yield call(RegisterAPI, action.payload);
    yield put(RegisterSuccess(data));
  } catch (error) {
    yield put(RegisterFailure(error.message));
  }
}
function* registerSaga() {
  yield takeLatest(RegisterRequest.type, RegisterSentSaga);

}
export default registerSaga;
