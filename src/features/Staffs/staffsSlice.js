import { createSlice } from '@reduxjs/toolkit';
import { STAFFS } from '../../shared/staffs';

const initialState = STAFFS;

const staffsSlice = createSlice({
  name: 'staffs',
  initialState,
  reducers: {
    addStaff: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addStaff } = staffsSlice.actions;
export default staffsSlice.reducer;
