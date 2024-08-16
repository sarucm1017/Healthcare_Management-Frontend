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

      const { userId, doctorId } = response.data;
      // Save the userId to local storage
      localStorage.setItem("userId", userId);
      localStorage.setItem("doctorId", doctorId);
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

////////////////////////fetch doctor by id///////////

export const fetchDoctorData = createAsyncThunk(
  'doctor/fetchDoctorData',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:5001/doctor/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to fetch doctor data");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///////////////////fetching doctors details////////////

export const fetchDoctorsDetailsById = createAsyncThunk("doctor/fetchDoctorDetailsById",
  async (userId,thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5001/doctor/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/////////////////update profile////////////

export const updateDoctor = createAsyncThunk('doctor/updateDoctor',
  async({userId, ...updateData}) =>  {
    const response = await axios.put(`http://localhost:5001/doctor/${userId}`, updateData);
    return response.data;
  }
);

const DoctorSlice = createSlice({
  name: "doctor",
  initialState: {
    data: [],
    role: null,
    error: '',
    loading: false,
    status: 'idle',
    doctors: [],
    doctorData: [],
  },
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    },
    setDoctorData(state, action) {
      state.doctorData = action.payload;
    },
    setUserdata: (state, action) => {
      state.userData = action.payload.userData;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.role = action.payload.role;
      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(action.payload.userData));
      localStorage.setItem('userId', action.payload.userId);
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('role', action.payload.role);
    },
    clearRole(state) {
      state.role = null;
    },

    clearDoctorData: (state) => {
      state.doctorData = null;
      state.status = 'idle';
      state.error = null;
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

        console.log("106",action.payload);

        state.userData = action.payload.data;
        state.userId = action.payload.userId;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.error = null;

        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify(action.payload.data));
        localStorage.setItem('userId', action.payload.userId);
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('role', action.payload.role);

        console.log('116', action.payload.userId);
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
      })
      //////////fetch doctor by id///////
      .addCase(fetchDoctorData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctorData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctorData = action.payload;
        console.log(state.doctorData , "150");
        console.log("Doctor data fetched:", state.doctorData); 
        
      })
      .addCase(fetchDoctorData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchDoctorsDetailsById.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchDoctorsDetailsById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
    })
    .addCase(fetchDoctorsDetailsById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
    })
    .addCase(updateDoctor.pending, (state) => {
      state.status = "loading";
    })
    .addCase(updateDoctor.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload; // Update patient data in the store
    })
    .addCase(updateDoctor.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  }
});

export const { setRole, clearRole, setUserdata, clearDoctorData } = DoctorSlice.actions;
export default DoctorSlice.reducer;

