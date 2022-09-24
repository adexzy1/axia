import { createSlice } from '@reduxjs/toolkit';
import type { user } from '../../Models/UserModel';

interface InitialState {
  user: null | user;
  loading: boolean;
  error: string | undefined;
  onMountLoading: boolean;
  signupSuccess: string;
}

const initialState: InitialState = {
  user: null,
  loading: false,
  error: undefined,
  onMountLoading: false,
  signupSuccess: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    removeErrorMessage: (state) => {
      state.error = undefined;
    },
  },
});

export const { removeErrorMessage } = userSlice.actions;
export default userSlice.reducer;
