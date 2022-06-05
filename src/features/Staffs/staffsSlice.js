import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import manageApi from '../../utils/manageApi';

const initialState = {
  get: { staffs: [], status: 'idle', error: null },
  modify: { status: 'idle', error: null },
};

export const getStaffs = createAsyncThunk(
  'staff/getStaffs',
  async (args, { rejectWithValue }) => {
    try {
      const response = await manageApi.get('/staffs');
      return [...response.data];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addStaff = createAsyncThunk('staff/addStaff', async (data) => {
  try {
    //console.log(data);
    const response = await manageApi.post('/staffs', data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const updateStaff = createAsyncThunk('staff/updateStaff', async ({ staffId, data }) => {
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

export const deleteStaff = createAsyncThunk('staff/deleteStaff', async (staffId) => {
  try {
    const response = await manageApi.delete(`/staffs/${staffId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const staffsSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {},
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

export default staffsSlice.reducer;
