import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';


export const userRegister = createAsyncThunk("userRegister", async (data , {rejectWithValue}) => {
    try {
        const response = await axios.post(`http://localhost:5001/users/register` , data)
        return response.data;
    } catch (error) {
        if(error.response) {
            const errorMsg = error.response.data.error || "An unexpected error occurred " ;
            return rejectWithValue(errorMsg);
        }
        else{
            return rejectWithValue("Network error");
        }
    }
});

 export const userOtp = createAsyncThunk("userOtp" , async (data , {rejectWithValue}) => {
    try {
        console.log("Sending OTP data:", data); // Add this log
        const response = await axios.post(`http://localhost:5001/users/otpVerify`, data , { withCredentials: true },)
        return response.data;
    } catch (error) {
        if(error.response) {
            console.error("Error response:", error.response); // Add this log
            const errorMsg = error.response.data.error || "An unexpected error occurred " ;
            return rejectWithValue(errorMsg);
        }
        else{
            return rejectWithValue("Network error");
        }
    }
 });


const userSlice = createSlice({
    name: "user",
    initialState:{
        error: '',
        loading: false,
    },
    reducers: {

    },
    extraReducers: (builder) =>{

        builder
        .addCase(userRegister.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(userRegister.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(userRegister.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload || "error occurred"
        })
        .addCase(userOtp.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(userOtp.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(userOtp.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload || "error occurred"
        })

    }
})




export default userSlice.reducer;