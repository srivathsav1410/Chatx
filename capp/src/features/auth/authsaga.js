import { call, put, takeLatest } from 'redux-saga/effects';
import { loginAPI,getUsers } from './authapi';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  getSearchRequest,
  UsersFetchFailure,
  UsersFetchSuccess
} from './authslice';

function* handleLogin(action) {
  try {
    const user = yield call(loginAPI, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}
function*  getUsersList(action){
  console.log("function")
try{
  const user=yield call(getUsers,action.payload);
  yield put(UsersFetchSuccess(user))
}
catch(error){
yield put(UsersFetchFailure(error.message))

}

}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(getSearchRequest.type,getUsersList)
}
