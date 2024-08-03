import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Register from "../Layout/Register/Registe";
import Login from "../Layout/Login/Login";
import SetPassword from "../Layout/SetPassword/SetPassword";
import OtpVerify from "../Layout/OtpVerify/OtpVerify";
import Popup from "../Pages/Popup";
import DoctorsDashboard from "../Layout/Dashborad/Doctors/DoctorsDashboard";
import PatientsDashboard from "../Layout/Dashborad/Patients/PatientsDashboard";
import PatientForm from "../Layout/DetailedForm/PatientForm";
import DoctorsForm from "../Layout/DetailedForm/DoctorsForm";
import AppointmentSectionPatient from "../Layout/AppointmentSection/Patients/AppointmentSectionPatient";
import BookAppointmentSection from "../Layout/AppointmentSection/Patients/BookAppointmentSection";
import CheckAvailability from "../Layout/AppointmentSection/Patients/CheckAvailability";
import PatientReport from "../Layout/ReportSection/Patients/PatientsReports";
import ReportDetails from "../Layout/ReportSection/Patients/ReportDetails";

const MainRoutes = () => {
    return (
        <>
        <Routes>
            <Route path ="/" element = {<LandingPage/>}></Route>
            <Route path ="/register" element = {<Register/>}></Route>
            <Route path ="/setpassword" element = {<SetPassword/>}></Route>
            <Route path ="/otpVerify" element = {<OtpVerify/>}></Route>
            <Route path ="/popup" element = {<Popup/>}></Route>
            <Route path ="/patientForm" element = {<PatientForm/>}></Route>
            <Route path ="/doctorsForm" element = {<DoctorsForm/>}></Route>
            <Route path="/login" element = {<Login/>}></Route>
            <Route path ="/doctorsDashboard" element = {<DoctorsDashboard/>}></Route>
            <Route path ="/patientsDashboard" element = {<PatientsDashboard/>}></Route>
            <Route path ="/appointmentSectionPatient" element = {<AppointmentSectionPatient/>}></Route>
            <Route path ="/bookappointmentPatient" element = {<BookAppointmentSection/>}></Route>
            <Route path ="/checkAvailability" element = {<CheckAvailability/>}></Route>
            <Route path ="/patientReport" element = {<PatientReport/>}></Route>
            <Route path ="/reportDetails" element = {<ReportDetails/>}></Route>
        </Routes>
        </>
    )
}

export default MainRoutes;