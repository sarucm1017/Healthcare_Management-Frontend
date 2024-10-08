import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for submitting patient form
export const submitPatientForm = createAsyncThunk(
  "submitPatientForm",
  async (payload, { rejectWithValue }) => {
    console.log("Sending payload:", payload);
    try {
      const response = await axios.post(
        "http://localhost:5001/patient/forms",
        payload
      );
      console.log("Response data:", response.data);

      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Response error data:", error.response.data);
        const errorMsg =
          error.response.data.error || "An unexpected error occurred";
        return rejectWithValue(errorMsg);
      } else {
        return rejectWithValue("Network error");
      }
    }
  }
);
/////////////////////////getting the oid for the patient ///////////////

/////////////////patientslice to get patient details////////////////

export const fetchPatientById = createAsyncThunk(
  "patient/fetchPatientById",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/patient/forms/${userId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/////////////////////////////////////////update//////////////////

// Thunk to update patient data
export const updatePatient = createAsyncThunk(
  "patient/updatePatient",
  async ({ userId, ...updatedData }) => {
    const response = await axios.put(
      `http://localhost:5001/patient/forms/${userId}`,
      updatedData
    );
    return response.data;
  }
);

const PatientSlice = createSlice({
  name: "patient",
  initialState: {
    data: [],
    role: null,
    error: "",
    userId: null,
    token: null,
    loading: false,
  },
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    },
    clearRole(state) {
      state.role = null;
    },
    setUserdata: (state, action) => {
      state.userData = action.payload.userData;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.role = action.payload.role;
      // Store user data in local storage
      localStorage.setItem("userData", JSON.stringify(action.payload.userData));
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
    },
    clearUser(state) {
      state.data = null;
      state.email = null;
      state.role = null;
      state.userId = null;
      state.token = null;
      state.error = "";
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
        console.log("106", action.payload);

        state.userData = action.payload.data;
        state.userId = action.payload.userId;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.error = null;

        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(action.payload.data));
        localStorage.setItem("userId", action.payload.userId);
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("role", action.payload.role);

        console.log("116", action.payload.userId);
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
      })
      .addCase(updatePatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload; // Update patient data in the store
      })
      .addCase(updatePatient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setRole, setUserdata, clearRole } = PatientSlice.actions;
export default PatientSlice.reducer;
