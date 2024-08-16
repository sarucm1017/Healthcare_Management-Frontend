import React from "react";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import "./reportOfpatient.css";

const CreateReport = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <DoctorsDashboardSideSection />
          <div className="col-md-10">
            <div className="main_home">
              <div className="nav_bar_section">
                <div className="left_section">
                  <div className="icon_part">
                    <i className="fa-solid fa-chart-simple"></i>
                  </div>
                  <div className="title_part">
                    <h4>Report</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="main_bodybannersection">
                <form action="">
                  <div className="col-md-12 maincontentsection">
                    <div className="save_report">
                      <div className="name_part">
                      <div className="report_inputMain">
                          <p>Patient Name</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                      </div>
                      <button className="btn-saveReport">
                        <a href="/createReport">Create</a>
                      </button>
                    </div>
                    <div className="reportadding_section">
                      <div className=" col-md-5 body_content-section">
                        <div className="report_inputMain">
                          <p>Blood Group</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Pulse Rate</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Breathing Rate</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Body Temperature</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Blood Pressure</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Oxygen Saturation</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                      </div>
                      <div className=" col-md-5 body_content-section">
                        <div className="report_inputMain">
                          <p>Height</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Weight</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Diagnosis</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Symptoms</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Current Medications</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Prescribed Treatment</p>
                          <div className="report_inputBoxValues">
                            <input type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateReport;
