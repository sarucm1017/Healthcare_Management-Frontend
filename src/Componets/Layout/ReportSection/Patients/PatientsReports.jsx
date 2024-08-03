import React from "react";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";

const PatientReport = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <PatientsdashboardSidesection />
          <div className="col-md-10">
            <div className="main_home">
              <div className="nav_bar_section">
                <div className="left_section">
                  <div className="icon_part">
                    <i class="fa-solid fa-file-medical"></i>
                  </div>
                  <div className="title_part">
                    <h4>Book Appointment</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="home_bodySection">
                <div className="col-md-12">
                  <div className="col-md-6">
                    <div className="top_section">
                      <div></div>
                      <div></div>
                    </div>
                    <div className="bottom_section">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientReport;
