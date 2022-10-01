import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './user/userSlice';
import alert from './alert/alertSlice';

const combineReducer = combineReducers({
  user,
  alert,
});

const store = configureStore({
  reducer: combineReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
