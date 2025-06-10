import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openedChat: null,
  Friends: null,
  messages: null,
  error: null,
  loading: false,
  img: null,
  requestType:null
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getFriendRequest: (state) => {

      console.log(state)
      state.loading = true;
      state.error = null;
    },
    FriendFetchSuccess: (state, action) => {
      state.loading = false;
      state.Friends = action.payload;
    },
    FriendFetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.Friends = null;
    },
    getMessages: (state) => {
      state.loading = true;
      state.error = null;
    },
    MessageFetchSuccess: (state, action) => {
      console.log(action.payload)
      state.loading = false;
      state.messages = action.payload;
    },
    MessageFetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.messages = null;
    },
    sendMessage: (state) => {
      state.loading = true;
      state.error = null;
    },
    MessageSendSuccess: (state, action) => {
      state.loading = false;
    },
    MessageSendFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.messages = null;
    },
    openedChatDetails: (state,action) => {
      state.loading = false;
      state.error = null; 
      state.openedChat = action.payload;
    },
    sendImage: (state) => {
      console.log("called saga")
      state.img = null;
       
    },  
    SetImage: (state, action) => {
      state.img = action.payload;
    },
    clearImage: (state) => {
      state.img = null;
    },  
       sendRequest:(state)=>{
      state.requestType=null;
  }
  },
});

export const {
  getFriendRequest,
  FriendFetchSuccess,
  FriendFetchFailure,
  getMessages,
  MessageFetchSuccess,
  MessageFetchFailure,
  sendMessage,
  MessageSendSuccess,
  MessageSendFailure,
  openedChatDetails,
  sendImage,
  SetImage,
  clearImage,
  sendRequest
} = chatSlice.actions;

export default chatSlice.reducer;
