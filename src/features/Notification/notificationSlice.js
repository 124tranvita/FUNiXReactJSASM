import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notifyShow: (state) => {
      state.show = true;
    },
    notifyClose: (state) => {
      state.show = false;
    },
  },
});

export const { notifyShow, notifyClose } = notificationSlice.actions;
export default notificationSlice.reducer;
