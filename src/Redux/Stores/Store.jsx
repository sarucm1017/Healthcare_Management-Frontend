import  {configureStore} from "@reduxjs/toolkit";
import UserSlice from "../Slices/UserSlice";
import PatientSlice from "../Slices/PatientSlice"
import DoctorSlice from "../Slices/DoctorSlice";



const store = configureStore({
    reducer: {
        user : UserSlice,
        patient: PatientSlice,
        doctor: DoctorSlice,
        

    },
})







export default store;
