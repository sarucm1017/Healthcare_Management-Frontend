import  {configureStore} from "@reduxjs/toolkit";
import UserSlice from "../Slices/UserSlice";
import PatientSlice from "../Slices/PatientSlice"
import DoctorSlice from "../Slices/DoctorSlice";
import calendarReducer from '../Slices/CalendarSlice';
import ReportSlice from "../Slices/ReportSlice";




const store = configureStore({
    reducer: {
        user : UserSlice,
        patient: PatientSlice,
        doctor: DoctorSlice,
        calendar: calendarReducer,
        report:ReportSlice
       

        

    },
})







export default store;
