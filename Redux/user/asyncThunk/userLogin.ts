import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { FieldValues } from 'react-hook-form';
import { linstance } from '../../../helper/axiosFetch';

const userLogin = createAsyncThunk('user/Login', async (data: FieldValues) => {
  try {
    const response = await linstance.post('/api/auth/login', {
      identifier: data.email,
      password: data.password,
      keepMeLoggedIn: data.keepMeLoggedIn,
    });

    const responseData = await response.data.data;
    return responseData;
  } catch (error) {
    const err = error as AxiosError;

    return err.response?.data;
  }
});

export default userLogin;
