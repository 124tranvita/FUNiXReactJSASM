import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idAsc: false,
  idDes: false,
  salaryAsc: false,
  salaryDes: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setIdAsc: (state) => {
      state.idAsc = true;
      state.idDes = false;
    },
    setIdDes: (state) => {
      state.idAsc = false;
      state.idDes = true;
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

export const { setIdAsc, setIdDes, setSalaryAsc, setSalaryDes } = filterSlice.actions;
export default filterSlice.reducer;
