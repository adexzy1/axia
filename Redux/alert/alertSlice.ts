import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  text: string;
  type: 'error' | 'success';
}

const initialState: InitialState = {
  text: 'A new error very sexy and beautiful only the greatest of all time',
  type: 'error',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, { payload }) => {
      state.text = payload.text;
      state.type = payload.type;
    },
  },
});

export default alertSlice.reducer;
