import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Search/searchSlice';
import filterReducer from './Filter/filterSlice';
import staffReducer from './Staffs/staffsSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
    staffs: staffReducer,
  },
});

export default store;
