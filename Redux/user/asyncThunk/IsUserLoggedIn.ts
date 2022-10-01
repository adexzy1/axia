import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { linstance } from '../../../helper/axiosFetch';

const isUserLoggedIn = createAsyncThunk('isUser/LoggedIn', async () => {
  try {
    const response = await linstance.get('/api/auth/user');
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
});

export default isUserLoggedIn;
