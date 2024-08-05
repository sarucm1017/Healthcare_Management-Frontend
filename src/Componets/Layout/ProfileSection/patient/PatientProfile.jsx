import React from "react";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";
import "./patientProfile.css";

const PatientProfile = () => {
    return(
        <>
         <div className="container-fluid">
        <div className="col-md-12 full_container">
          <PatientsdashboardSidesection />
          <div className="col-md-10">
            <div className="main_home">
              <div className="nav_bar_section">
                <div className="left_section">
                  <div className="icon_part">
                    <i class="fa-solid fa-chart-simple"></i>
                  </div>
                  <div className="title_part">
                    <h4>Profile</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="main_section">
                
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}


export default PatientProfile;