import { createSlice } from '@reduxjs/toolkit';
import { DEPARTMENTS } from '../../shared/staffs';

const initialState = DEPARTMENTS;

const departmentSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {},
});

export default departmentSlice.reducer;
