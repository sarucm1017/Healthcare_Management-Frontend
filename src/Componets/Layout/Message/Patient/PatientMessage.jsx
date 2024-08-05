import React from "react";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";
import "./patientMessage.css"

const PatientMessage = () => {
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
                  <i class="fa-solid fa-user"></i>
                  </div>
                  <div className="title_part">
                    <h4>Message</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="main_section">
                <div className="col-md-12 profilefullSection">
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
    )
}

export default PatientMessage