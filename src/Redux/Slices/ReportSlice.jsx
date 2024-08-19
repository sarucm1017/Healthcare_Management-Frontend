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

////////////fetching reportt by doctor id//////////

export const  fetchReportsByDoctorId = createAsyncThunk(
  'report/fetchReportsByDoctorId',
  async (doctorId, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:5001/doctor/reports/${doctorId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
}
);

////////////fetchreport by report id /////////

export const fetchReportById = createAsyncThunk(
  'report/fetchReportById',async(reportId) => {
    const reponse = await axios.get(`http://localhost:5001/doctor/reports/${reportId}`)
    return reponse.data;
  }
);

const reportSlice = createSlice({
    name: 'report',
  initialState: {
    report: [],
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
      })
      .addCase(fetchReportsByDoctorId.pending, (state) => {
        state.loading = true;
    })
    .addCase(fetchReportsByDoctorId.fulfilled, (state, action) => {
        state.report = action.payload;
        state.loading = false;
    })
    .addCase(fetchReportsByDoctorId.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
    })
    .addCase(fetchReportById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchReportById.fulfilled, (state, action) => {
      state.loading = false;
      state.report = action.payload;
    })
    .addCase(fetchReportById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default reportSlice.reducer;