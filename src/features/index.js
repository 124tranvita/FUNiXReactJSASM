import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Search/searchSlice';
import sortReducer from './Sort/sortSlice';
import staffReducer from './Staffs/staffsSlice';
import departmentReducer from './Deparments/departmentSlice';
import notificationReducer from './Notification/notificationSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    sort: sortReducer,
    staff: staffReducer,
    department: departmentReducer,
    notification: notificationReducer,
  },
});

export default store;
