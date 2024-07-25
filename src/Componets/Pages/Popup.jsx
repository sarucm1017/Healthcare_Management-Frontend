import React from "react";
import doctorImage from "../Layout/Register/patientOption.png";
import patientImage from "../Layout/Register/doctorsoption.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole } from "../../Redux/Slices/UserSlice";

const Popup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleRoleSelect = (role) => {
    console.log("Selected Role in Popup:", role); 
    dispatch(setRole(role));
    navigate("/register");
  
  };


    return(
        <>
         <div className="popup_container">
        <div className="popup">
          <div className="options">
            <div className="header_section">
              <p>To proceed with your registration please select your role</p>
            </div>
            <div className="center-section">
              <div className="optionFordoctor" onClick={() => handleRoleSelect("doctor")}>
                <div>
                  <a href=""></a>
                    <img src={doctorImage} alt="" />
                  
                </div>
                <div>
                  <p>Doctor</p>
                </div>
              </div>
              <div className="optionForpatient" onClick={() => handleRoleSelect("patient")}>
                <div>
                  <a href=""></a>
                  <img src={patientImage} alt="" />
                </div>
                <div>
                  <p>Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Popup;