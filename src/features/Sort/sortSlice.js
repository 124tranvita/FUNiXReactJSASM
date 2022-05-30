import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staffIdAsc: false,
  staffIdDes: false,
  deptIdAsc: false,
  deptIdDes: false,
  salaryAsc: false,
  salaryDes: false,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setStaffIdAsc: (state) => {
      state.staffIdAsc = true;
      state.staffIdDes = false;
    },
    setStaffIdDes: (state) => {
      state.staffIdAsc = false;
      state.staffIdDes = true;
    },
    setDeptIdAsc: (state) => {
      state.deptIdAsc = true;
      state.deptIdDes = false;
    },
    setDeptIdDes: (state) => {
      state.deptIdAsc = false;
      state.deptIdDes = true;
    },
    setSalaryAsc: (state) => {
      state.salaryAsc = true;
      state.salaryDes = false;
    },
    setSalaryDes: (state) => {
      state.salaryAsc = false;
      state.salaryDes = true;
    },
  },
});

export const {
  setStaffIdAsc,
  setStaffIdDes,
  setDeptIdAsc,
  setDeptIdDes,
  setSalaryAsc,
  setSalaryDes,
} = sortSlice.actions;
export default sortSlice.reducer;
