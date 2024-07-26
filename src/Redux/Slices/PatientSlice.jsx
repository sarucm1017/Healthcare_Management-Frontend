import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for submitting patient form
export const submitPatientForm = createAsyncThunk(
  "submitPatientForm",
  async (payload, { rejectWithValue }) => {
    console.log("Sending payload:", payload);
    try {
      const response = await axios.post(
        "http://localhost:5001/patient/forms", payload
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Response error data:", error.response.data);
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
      .addCase(submitPatientForm.pending, (state) => {
        console.log("submitDoctorForm pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(submitPatientForm.fulfilled, (state, action) => {
        console.log("submitDoctorForm fulfilled");
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(submitPatientForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "error occurred";
      });
  }
});

export const { setRole, clearRole } = PatientSlice.actions;
export default PatientSlice.reducer;
