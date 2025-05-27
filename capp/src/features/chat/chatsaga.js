
import { call,put,takeLatest } from "redux-saga/effects";
import { getFriendsAPI,getMessagesAPI,SendMessageAPI,sendImageAPI} from "./chatapi";
 import  {clearImage, getFriendRequest, getMessages,sendImage,sendMessage,SetImage} from "./chatslice";
import {
MessageSendSuccess,
  FriendFetchSuccess,
  FriendFetchFailure,
  MessageFetchFailure   ,
    MessageFetchSuccess,
    MessageSendFailure,
} from "./chatslice";   
function* fetchFriendsSaga(action) {
    console.log("called saga")
  try {
    const data = yield call(getFriendsAPI, action.payload);
    yield put(FriendFetchSuccess(data));
  } catch (error) {
    yield put(FriendFetchFailure(error.message));
  }
}


function* fetchMessagesSaga(action) {
  try {
    const data = yield call(getMessagesAPI, action.payload); 
    yield put(MessageFetchSuccess(data));
  } catch (error)
  {
    yield put(MessageFetchFailure(error.message));
  }
}


function* SendMessageAPISaga(action) {
  try {
    const data = yield call(SendMessageAPI, action.payload);
        yield put(MessageSendSuccess(data));
  } catch (error) {
    yield put(MessageSendFailure(error.message));
  }
}
function* SendImageAPISaga(action) {
  try {
    const data = yield call(sendImageAPI, action.payload);
        yield put(SetImage(data));
  } catch (error) {
    yield put(MessageSendFailure(error.message));
  }
}
function* chatSaga() {
  yield takeLatest(getFriendRequest.type, fetchFriendsSaga);
  yield takeLatest(getMessages.type, fetchMessagesSaga);
  yield takeLatest(sendMessage.type, SendMessageAPISaga);
  yield takeLatest(sendImage.type, SendImageAPISaga);
}

export default chatSaga;