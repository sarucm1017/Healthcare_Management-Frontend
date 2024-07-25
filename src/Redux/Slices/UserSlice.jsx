
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunks
export const userRegister = createAsyncThunk("user/register", async (userdata, { rejectWithValue }) => {
    try {
        const response = await axios.post(`http://localhost:5001/users/register`, userdata);
        return response.data;
    } catch (error) {
        if (error.response) {
            const errorMsg = error.response.data.error || "An unexpected error occurred";
            return rejectWithValue(errorMsg);
        } else {
            return rejectWithValue("Network error");
        }
    }
});

export const verifyOtp = createAsyncThunk("user/verifyOtp", async (otpdata, { rejectWithValue }) => {
    try {
        const response = await axios.post(`http://localhost:5001/users/otpVerify`, otpdata);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Error response:", error.response); // For debugging
            const errorMsg = error.response.data.error || "An unexpected error occurred";
            return rejectWithValue(errorMsg);
        } else {
            return rejectWithValue("Network error");
        }
    }
});

export const userlogin = createAsyncThunk("user/login", async (credentials, thunkAPI) => {
    try {
        const response = await axios.post(`http://localhost:5001/users/userlogin`, credentials);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || "An unexpected error occurred");
    }
});

// Slice
const UserSlice = createSlice({
    name: "user",
    initialState: {
        data: null, 
        email: null,
        role: null,
        token: null,
        error: '',
        loading: false,
    },
    reducers: {
        setRole(state, action) {
            state.role = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        clearUser(state) {
            state.data = null;
            state.email = null;
            state.role = null;
            state.token = null;
            state.error = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegister.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Error occurred";
            })
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true;
                state.error = '';
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
                state.error = '';
            })
            .addCase(userlogin.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token; // Set token from login response
                state.email = action.payload.email; // Set email from login response
            })
            .addCase(userlogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Error occurred";
            });
    }
});

export const { setRole, setEmail, clearUser  } = UserSlice.actions;
export default UserSlice.reducer;
