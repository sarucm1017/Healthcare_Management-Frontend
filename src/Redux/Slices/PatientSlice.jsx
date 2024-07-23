import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for submitting patient form
export const submitPatientForm = createAsyncThunk(
  "submitPatientForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/patient/forms",
        formData
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

const PatientSlice = createSlice({
  name: "patient",
  initialState: {
    data: {},
    error: '',
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitPatientForm.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(submitPatientForm.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(submitPatientForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "error occurred";
      });
  }
});

export default PatientSlice.reducer;
