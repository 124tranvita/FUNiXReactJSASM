import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Search/searchSlice';
import sortReducer from './Sort/sortSlice';
import staffReducer from './Staffs/staffsSlice';
import departmentReducer from './Deparments/departmentSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    sort: sortReducer,
    staff: staffReducer,
    department: departmentReducer,
  },
});

export default store;
