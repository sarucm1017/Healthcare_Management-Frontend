import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Register from "../Layout/Register/Registe";
import Login from "../Layout/Login/Login";
import SetPassword from "../Layout/SetPassword/SetPassword";
import OtpVerify from "../Layout/OtpVerify/OtpVerify";
import Popup from "../Pages/Popup";
import DoctorsDashboard from "../Layout/Dashborad/Doctors/DoctorsDashboard";
import PatientsDashboard from "../Layout/Dashborad/Patients/PactientsDashboard";
import PatientForm from "../Layout/DetailedForm/PatientForm";
import DoctorsForm from "../Layout/DetailedForm/DoctorsForm";





const MainRoutes = () => {
    return (
        <>
        <Routes>
            <Route path ="/" element = {<LandingPage/>}></Route>
            <Route path ="/register" element = {<Register/>}></Route>
            <Route path ="/login" element = {<Login/>}></Route>
            <Route path ="/setpassword" element = {<SetPassword/>}></Route>
            <Route path ="/otpVerify" element = {<OtpVerify/>}></Route>
            <Route path ="/popup" element = {<Popup/>}></Route>
            <Route path ="/patientForm" element = {<PatientForm/>}></Route>
            <Route path ="/doctorsForm" element = {<DoctorsForm/>}></Route>
            <Route path ="/doctorsDashboard" element = {<DoctorsDashboard/>}></Route>
            <Route path ="/patientsDashboard" element = {<PatientsDashboard/>}></Route>
        </Routes>
        </>
    )
}

export default MainRoutes;