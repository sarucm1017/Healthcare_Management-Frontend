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
                  <i class="fa-solid fa-message"></i>
                  </div>
                  <div className="title_part">
                    <h4>Message</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="main_section">
                <div className="col-md-12">
                   <div className="col-md-4">
                    <div className="head_searchSection">
                        <input type="text" />
                    </div>
                    <div className="classification-section">
                        <div><p>All chat</p></div>
                    </div>
                    <div className="chatSection">
                        
                    </div>
                    </div> 
                   <div className="col-md-7"></div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
    )
}

export default PatientMessage