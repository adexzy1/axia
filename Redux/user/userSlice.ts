import { createSlice } from '@reduxjs/toolkit';
import type { user } from '../../Models/UserModel';
import Reload from '../../utils/Reload';
import googleLogin from './asyncThunk/googleLogin';
import isUserLoggedIn from './asyncThunk/IsUserLoggedIn';
import userLogin from './asyncThunk/userLogin';
import userLogout from './asyncThunk/userLogout';
import userSignup from './asyncThunk/userSignup';

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
  extraReducers(builder) {
    // login
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        if (payload.error) {
          switch (payload.error) {
            case 'Invalid identifier or password':
              state.error = 'Invalid Email or Password';
              break;
            default:
              state.error = payload.error;
          }
          state.loading = false;
          return;
        }
        state.user = { ...payload };
        state.loading = false;
        Reload();
      });

    // google login
    builder
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(googleLogin.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        if (payload.error) {
          state.error = payload.error;
          state.loading = false;
        }
        state.user = { ...payload };
        state.loading = false;
        Reload();
      });

    // signup

    builder
      .addCase(userSignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.error = action.payload.error;
          state.loading = false;
          return;
        }
        state.signupSuccess = action.payload.message;
        state.loading = false;
        Reload();
      });

    // check if user in already logged in
    builder
      .addCase(isUserLoggedIn.pending, (state) => {
        state.onMountLoading = true;
      })
      .addCase(isUserLoggedIn.rejected, (state) => {
        state.onMountLoading = false;
        state.signupSuccess = 'true';
      })
      .addCase(isUserLoggedIn.fulfilled, (state, action) => {
        if (action.payload?.error) {
          state.onMountLoading = false;
          return;
        } else {
          state.user = action.payload;
          state.onMountLoading = false;
        }
      });

    // logout
    builder
      .addCase(userLogout.fulfilled, (state, action) => {
        state.user = null;
        Reload();
      })
      .addCase(userLogout.rejected, (state) => {
        state.error = 'An Error occured';
      });
  },
});

export const { removeErrorMessage } = userSlice.actions;
export default userSlice.reducer;
