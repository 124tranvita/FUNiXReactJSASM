import { createSlice } from '@reduxjs/toolkit';
import { STAFFS } from '../../shared/staffs';

const initialState = STAFFS;

const staffsSlice = createSlice({
  name: 'staffs',
  initialState,
  reducers: {},
});

export default staffsSlice.reducer;
