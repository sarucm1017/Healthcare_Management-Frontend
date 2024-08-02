import { createSlice } from '@reduxjs/toolkit';
import { addMonths, startOfMonth } from 'date-fns';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    currentMonth: startOfMonth(new Date()).toISOString()
  },
  reducers: {
    nextMonth: (state) => {
      state.currentMonth = addMonths(state.currentMonth, 1).toISOString();
    },
    prevMonth: (state) => {
      state.currentMonth = addMonths(state.currentMonth, -1).toISOString();
    }
  }
});

export const { nextMonth, prevMonth } = calendarSlice.actions;
export default calendarSlice.reducer;
