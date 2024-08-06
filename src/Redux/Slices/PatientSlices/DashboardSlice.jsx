import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch patient data
export const fetchPatientData = createAsyncThunk('patient/fetchPatientData', async (userId) => {
  const response = await axios.get(`http://localhost:5001/patient/forms/${userId}`);
  return response.data;
});

const patientFetchdataSlice = createSlice({
  name: 'patient',
  initialState: {
    patient: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatientData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatientData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patient = action.payload;
      })
      .addCase(fetchPatientData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default patientFetchdataSlice.reducer;
