import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import manageApi from '../../utils/manageApi';

const initialState = {
  get: { staffs: [], status: 'idle', error: null },
  modify: { status: 'idle', error: null },
};

export const getStaffs = createAsyncThunk('staffs/getStaffs', async () => {
  try {
    const response = await manageApi.get('/staffs');
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const addStaff = createAsyncThunk('staffs/addStaff', async (data) => {
  try {
    //console.log(data);
    const response = await manageApi.post('/staffs', data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const updateStaff = createAsyncThunk('staffs/updateStaff', async ({ staffId, data }) => {
  console.log('staff Id: ', staffId);
  console.log('Data: ', data);
  try {
    const response = await manageApi.patch(`/staffs/${staffId}`, data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const deleteStaff = createAsyncThunk('staffs/deleteStaff', async (staffId) => {
  try {
    const response = await manageApi.delete(`/staffs/${staffId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const staffsSlice = createSlice({
  name: 'staffs',
  initialState,
  reducers: {
    resetModifyStatus(state) {
      state.modify.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getStaffs.pending, (state, pending) => {
        state.get.status = 'loading';
      })
      .addCase(getStaffs.fulfilled, (state, action) => {
        state.get.status = 'succeeded';
        state.get.staffs = action.payload;
        state.get.error = null;
      })
      .addCase(getStaffs.rejected, (state, action) => {
        state.get.status = 'failed';
        state.get.error = action.payload;
      });
    builder
      .addCase(addStaff.pending, (state, pending) => {
        state.modify.status = 'loading';
      })
      .addCase(addStaff.fulfilled, (state, action) => {
        state.modify.status = 'succeeded';
        state.modify.error = null;
      })
      .addCase(addStaff.rejected, (state, action) => {
        state.modify.status = 'failed';
        state.modify.error = action.payload;
      });
    builder
      .addCase(updateStaff.pending, (state, pending) => {
        state.modify.status = 'loading';
      })
      .addCase(updateStaff.fulfilled, (state, action) => {
        state.modify.status = 'succeeded';
        state.modify.error = null;
      })
      .addCase(updateStaff.rejected, (state, action) => {
        state.modify.status = 'failed';
        state.modify.error = action.payload;
      });
    builder
      .addCase(deleteStaff.pending, (state, pending) => {
        state.modify.status = 'loading';
      })
      .addCase(deleteStaff.fulfilled, (state, action) => {
        state.modify.status = 'succeeded';
        state.modify.error = null;
      })
      .addCase(deleteStaff.rejected, (state, action) => {
        state.modify.status = 'failed';
        state.modify.error = action.payload;
      });
  },
});

export const { resetModifyStatus } = staffsSlice.actions;
export default staffsSlice.reducer;
