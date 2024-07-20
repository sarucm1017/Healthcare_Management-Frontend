import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const userRegister = createAsyncThunk("userRegister", async (userdata , {rejectWithValue}) => {
    try {
        const response = await axios.post(
            `http://localhost:5001/users/register` , userdata)
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

 export const verifyOtp = createAsyncThunk("verifyOtp" , async (otpdata , {rejectWithValue}) => {
    try {
       
        const response = await axios.post(
            `http://localhost:5001/users/otpVerify`, otpdata);
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
    name: "data",
    initialState:{
        data: [],
        error: '',
        loading: false,
    },
    reducers: {},
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
        .addCase(verifyOtp.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(verifyOtp.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(verifyOtp.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload || "error occurred"
        })

    }
})




export default userSlice.reducer;