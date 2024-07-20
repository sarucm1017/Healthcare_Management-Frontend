import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Register from "../Layout/Register/Registe";
import Login from "../Layout/Login/Login";
import SetPassword from "../Layout/SetPassword/SetPassword";
import OtpVerify from "../Layout/OtpVerify/OtpVerify";
import Popup from "../Pages/Popup"





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
        </Routes>
        </>
    )
}

export default MainRoutes;