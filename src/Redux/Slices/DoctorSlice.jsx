import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for submitting patient form
export const submitDoctorForm = createAsyncThunk(
  "submitDoctorForm",
  async ({ formData, role }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/doctor/forms",
        { ...formData, role }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const errorMsg = error.response.data.error || "An unexpected error occurred";
        return rejectWithValue(errorMsg);
      } else {
        return rejectWithValue("Network error");
      }
    }
  }
);

const DoctorSlice = createSlice({
  name: "doctor",
  initialState: {
    data: {},
    role: null,
    error: '',
    loading: false,
  },
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    },
    clearRole(state) {
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitDoctorForm.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(submitDoctorForm.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(submitDoctorForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "error occurred";
      });
  }
});

export const { setRole, clearRole } = DoctorSlice.actions;
export default DoctorSlice.reducer;

