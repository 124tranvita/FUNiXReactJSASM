import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setKeyword } = searchSlice.actions;
export default searchSlice.reducer;
