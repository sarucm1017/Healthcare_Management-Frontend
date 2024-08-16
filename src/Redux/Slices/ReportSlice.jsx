import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createReport = createAsyncThunk(
    'report/createReport',async (reportData, {rejectWithValue}) => {
        try {
            const reponse = await axios.post("http://localhost:5001/doctor/report", reportData);
            return reponse.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : { message: 'An unknown error occurred.' });
        }
    }
);


const reportSlice = createSlice({
    name: 'report',
  initialState: {
    report: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReport.fulfilled, (state, action) => {
        state.loading = false;
        state.report = action.payload;
      })
      .addCase(createReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default reportSlice.reducer;