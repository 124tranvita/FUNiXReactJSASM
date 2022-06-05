import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import manageApi from '../../utils/manageApi';

const initialState = {
  get: { departments: [], status: 'idle', error: null },
  modify: { status: 'idle', error: null },
};

export const getDepts = createAsyncThunk(
  'department/getDepts',
  async (args, { rejectWithValue }) => {
    try {
      const response = await manageApi.get('/departments');
      return [...response.data];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addDept = createAsyncThunk('department/addDept', async (data) => {
  try {
    const response = await manageApi.post('/departments', data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const updateDept = createAsyncThunk(
  'department/updateDept',
  async ({ deptId, data }) => {
    console.log('departmentSlice detpId: ', deptId);
    try {
      const response = await manageApi.patch(`/departments/${deptId}`, data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const deleteDept = createAsyncThunk('department/deleteDept', async (deptId) => {
  try {
    const response = await manageApi.delete(`/departments/${deptId}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    resetModifyStatus(state) {
      state.modify.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getDepts.pending, (state, pending) => {
        state.get.status = 'loading';
      })
      .addCase(getDepts.fulfilled, (state, action) => {
        state.get.status = 'succeeded';
        state.get.departments = action.payload;
        state.get.error = null;
      })
      .addCase(getDepts.rejected, (state, action) => {
        state.get.status = 'failed';
        state.get.error = action.payload;
      });
    builder
      .addCase(addDept.pending, (state, pending) => {
        state.modify.status = 'loading';
      })
      .addCase(addDept.fulfilled, (state, action) => {
        state.modify.status = 'succeeded';
        state.modify.error = null;
      })
      .addCase(addDept.rejected, (state, action) => {
        state.modify.status = 'failed';
        state.modify.error = action.payload;
      });
    builder
      .addCase(updateDept.pending, (state, pending) => {
        state.modify.status = 'loading';
      })
      .addCase(updateDept.fulfilled, (state, action) => {
        state.modify.status = 'succeeded';
        state.modify.error = null;
      })
      .addCase(updateDept.rejected, (state, action) => {
        state.modify.status = 'failed';
        state.modify.error = action.payload;
      });
    builder
      .addCase(deleteDept.pending, (state, pending) => {
        state.modify.status = 'loading';
      })
      .addCase(deleteDept.fulfilled, (state, action) => {
        state.modify.status = 'succeeded';
        state.modify.error = null;
      })
      .addCase(deleteDept.rejected, (state, action) => {
        state.modify.status = 'failed';
        state.modify.error = action.payload;
      });
  },
});

export const { resetModifyStatus } = departmentSlice.actions;

export default departmentSlice.reducer;
