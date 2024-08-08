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



/////////////////patientslice to get patient details////////////////

export const fetchPatientById = createAsyncThunk("patient/fetchPatientById",
  async (userId,thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5001/patient/forms/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

const PatientSlice = createSlice({
  name: "patient",
  initialState: {
    data: [],
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
      })
      /////////////////////////////////
      .addCase(fetchPatientById.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchPatientById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
    })
    .addCase(fetchPatientById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
    });
  }
});

export const { setRole, clearRole } = PatientSlice.actions;
export default PatientSlice.reducer;
