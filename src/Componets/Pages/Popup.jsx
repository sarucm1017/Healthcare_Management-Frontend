import React from "react";
import doctorImage from "../Layout/Register/patientOption.png";
import patientImage from "../Layout/Register/doctorsoption.png";

const Popup = () => {
    return(
        <>
         <div className="popup_container">
        <div className="popup">
          <div className="options">
            <div className="header_section">
              <p>To proceed with your registration please select your role</p>
            </div>
            <div className="center-section">
              <div className="optionFordoctor">
                <div>
                  <a href="">
                    <img src={doctorImage} alt="" />{" "}
                  </a>
                </div>
                <div>
                  <p>Doctor</p>
                </div>
              </div>
              <div className="optionForpatient">
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