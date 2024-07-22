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


 export const userlogin = createAsyncThunk("userlogin" , async (credentials, thunkAPI) => {

    try {
        
        const response = await axios.post(`http://localhost:5001/users/userlogin`, credentials);
        return response.data;

    } catch (error) {
        
        return thunkAPI.rejectWithValue(error.response.data);
    }
 })


const userSlice = createSlice({
    name: "data",
    initialState:{
        data: [],
        role: null,
        token: null,
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
        .addCase(userlogin.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(userlogin.fulfilled, (state,action) => {
            state.loading = false;
        })
        .addCase(userlogin.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload || "error occurred"
        })

    }
})



export const { setRole, clearRole } = userSlice.actions;
export default userSlice.reducer;