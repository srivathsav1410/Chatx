// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootsaga';
import { combineReducers } from 'redux';

import authReducer from '../features/auth/authslice';
import chatReducer from '../features/chat/chatslice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], 
};

// Combine reducers
const rootReducer = {
  auth: authReducer,
  chat: chatReducer,
};

// Wrap with persistReducer
const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

// Create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false, // Required for redux-persist
    }).concat(sagaMiddleware),
});

// Run root saga
sagaMiddleware.run(rootSaga);

// Export store and persistor
export const persistor = persistStore(store);
export default store;
