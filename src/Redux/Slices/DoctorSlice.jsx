import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for submitting patient form
export const submitDoctorForm = createAsyncThunk(
  "submitDoctorForm",
  async (payload, { rejectWithValue }) => {
    console.log("Sending payload:", payload);
    try {
      const response = await axios.post(
        "http://localhost:5001/doctor/forms", payload
      );
      return response.data;

    } catch (error) {
      console.error("Axios error details:", error); 
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

/////////////////////////////fetching the doctors//////////////////////////

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  const response = await axios.get('http://localhost:5001/doctor/forms'); // Endpoint to fetch all doctors
  return response.data;
});



const DoctorSlice = createSlice({
  name: "doctor",
  initialState: {
    data: [],
    role: null,
    error: '',
    loading: false,
    status: 'idle',
    doctors: [],
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
        console.log("submitDoctorForm pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(submitDoctorForm.fulfilled, (state, action) => {
        console.log("submitDoctorForm fulfilled");
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(submitDoctorForm.rejected, (state, action) => {
        console.log("submitDoctorForm rejected");
        state.loading = false;
        state.error = action.payload || "error occurred";
      })
      ////////////////////////// fetching doctors ////////////////////
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setRole, clearRole } = DoctorSlice.actions;
export default DoctorSlice.reducer;

