import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunks
export const userRegister = createAsyncThunk(
  "user/register",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/users/register`,
        userdata
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const errorMsg =
          error.response.data.error || "An unexpected error occurred";
        return rejectWithValue(errorMsg);
      } else {
        return rejectWithValue("Network error");
      }
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "user/verifyOtp",
  async (otpdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/users/otpVerify`,
        otpdata
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response);
        const errorMsg =
          error.response.data.error || "An unexpected error occurred";
        return rejectWithValue(errorMsg);
      } else {
        return rejectWithValue("Network error");
      }
    }
  }
);

export const userlogin = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/users/userlogin`,
        credentials
      );
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// Slice
const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    email: null,
    role: null,
    userId: null,
    token: null,
    error: "",
    loading: false,
  },
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setUserData: (state, action) => {
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
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.userId;
        state.data = action.payload.data;
         // Store token in localStorage
         localStorage.setItem("token", action.payload.token);
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred";
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred";
      })
      .addCase(userlogin.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(userlogin.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Login action payload:", action.payload);
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
      })
      .addCase(userlogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error occurred";
      });
  },
});

export const { setRole, setEmail,setUserData, clearUser } = UserSlice.actions;
export default UserSlice.reducer;
