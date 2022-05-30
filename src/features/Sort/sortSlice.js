import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staffIdAsc: false,
  staffIdDes: false,
  deptIdAsc: false,
  deptIdDes: false,
  salary: {
    staffIdAsc: false,
    staffIdDes: false,
    salaryAsc: false,
    salaryDes: false,
  },
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
      state.salary.salaryAsc = true;
      state.salary.salaryDes = false;
      state.salary.staffIdAsc = false;
      state.salary.staffIdDes = false;
    },
    setSalaryDes: (state) => {
      state.salary.salaryAsc = false;
      state.salary.salaryDes = true;
      state.salary.staffIdAsc = false;
      state.salary.staffIdDes = false;
    },
    setSalaryIdAsc: (state) => {
      state.salary.salaryAsc = false;
      state.salary.salaryDes = false;
      state.salary.staffIdAsc = true;
      state.salary.staffIdDes = false;
    },
    setSalaryIdDes: (state) => {
      state.salary.salaryAsc = false;
      state.salary.salaryDes = false;
      state.salary.staffIdAsc = false;
      state.salary.staffIdDes = true;
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
  setSalaryIdAsc,
  setSalaryIdDes,
} = sortSlice.actions;
export default sortSlice.reducer;
