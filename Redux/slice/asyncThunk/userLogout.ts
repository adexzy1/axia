import { createAsyncThunk } from '@reduxjs/toolkit';
import { linstance } from '../../../helper/axiosFetch';

// function to logout user
const userLogout = createAsyncThunk('user/logout', async () => {
  const response = await linstance.post('/api/auth/logout');
  return response.data;
});

export default userLogout;
