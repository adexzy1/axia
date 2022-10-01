import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './slice/userSlice';

const combineReducer = combineReducers({
  user,
});

const store = configureStore({
  reducer: combineReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
