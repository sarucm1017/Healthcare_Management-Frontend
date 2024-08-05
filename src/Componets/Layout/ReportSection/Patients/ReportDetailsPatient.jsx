import React from "react";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";

const ReportDetails = () => {
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
                    <i class="fa-solid fa-chart-simple"></i>
                  </div>
                  <div className="title_part">
                    <h4>Report</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="">
                <div className="col-md-12 content-body-section">
                  <div className=" col-md-6 body_content-section">
                    <div>
                      <p>Blood Group</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Pulse Rate</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Breathing Rate</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Body Temperature</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Blood Pressure</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Oxygen Saturation</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                  </div>
                  <div className=" col-md-6 body_content-section">
                    <div>
                      <p>Blood Group</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Pulse Rate</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Breathing Rate</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Body Temperature</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Blood Pressure</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                    <div>
                      <p>Oxygen Saturation</p>
                      <div className="report_inputBox"><p></p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportDetails;
