import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staffSearch: '',
  departmentSearch: '',
  salarySearch: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    staffKeyword: (state, action) => {
      state.staffSearch = action.payload;
    },
    departmentKeyword: (state, action) => {
      state.departmentSearch = action.payload;
    },
    salaryKeyword: (state, action) => {
      state.salarySearch = action.payload;
    },
  },
});

export const { staffKeyword, departmentKeyword, salaryKeyword } = searchSlice.actions;
export default searchSlice.reducer;
