import { createAsyncThunk } from '@reduxjs/toolkit';
import { linstance } from '../../../helper/axiosFetch';
import { AxiosError } from 'axios';

const googleLogin = createAsyncThunk(
  'google/login',
  async (access_token: string) => {
    try {
      const response = await linstance.post('/auth/googleLogin', {
        access_token,
      });
      const responseData = await response.data;

      return responseData;
    } catch (error) {
      const err = error as AxiosError;
      return err.response?.data;
    }
  }
);

export default googleLogin;
