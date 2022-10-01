import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { FieldValues } from 'react-hook-form';
import { linstance } from '../../../helper/axiosFetch';

const userSignup = createAsyncThunk(
  'user/Signup',
  async (data: FieldValues) => {
    try {
      const response = await linstance.post('/api/auth/register', {
        email: data.email,
        password: data.password,
        username: data.username,
      });

      const responseData = await response.data;

      return responseData;
    } catch (error) {
      const err = error as AxiosError;
      return err.response?.data;
    }
  }
);

export default userSignup;
