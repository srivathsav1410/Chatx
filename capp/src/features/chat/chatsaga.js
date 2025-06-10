
import { call,put,takeLatest } from "redux-saga/effects";
import { getFriendsAPI,getMessagesAPI,SendMessageAPI,sendImageAPI,sendRequestAPI} from "./chatapi";
 import  { getFriendRequest, getMessages,sendImage,sendMessage,sendRequest,SetImage} from "./chatslice";
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
function* SendRequestAPISaga(action) {
  try {
    const data = yield call(sendRequestAPI, action.payload);
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
function* chatSaga() {
  yield takeLatest(getFriendRequest.type, fetchFriendsSaga);
  yield takeLatest(getMessages.type, fetchMessagesSaga);
  yield takeLatest(sendMessage.type, SendMessageAPISaga);
  yield takeLatest(sendImage.type, SendImageAPISaga);
  yield takeLatest(sendRequest.type,SendRequestAPISaga);
}

export default chatSaga;