import React from "react";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import "./reportOfpatient.css";

const ReportOfpatient = () => {
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
                <div className="col-md-12 maincontentsection">
                  <div className="banner_navbar">
                    <div className="banner_section-header">
                      <div className="headerClassification all">
                        <p>All</p>
                      </div>
                      <div className="headerClassification">
                        <p>Newly Added</p>
                      </div>
                    </div>
                    <div className="createbtn-report">
                      <button className="btn-CreateReport">
                        <a href="/createReport">Create Report</a>
                      </button>
                    </div>
                  </div>
                  <div className="bannerSection-content">
                    <table className="reportTable">
                      <thead>
                        <tr>
                          <th className="table-header">Patient Name</th>
                          <th className="table-header">Pulse</th>
                          <th className="table-header">Body Temperature</th>
                          <th className="table-header">Blood Pressure</th>
                          <th className="table-header">Breathing Rate</th>
                        </tr>
                      </thead>

                      <tbody className="table-bodyContent">
                        <tr>
                          <td className="tableValues">Shahul</td>
                          <td className="tableValues">86 bpm</td>
                          <td className="tableValues">36.4 C</td>
                          <td className="tableValues">97/60 mm Hg</td>
                          <td className="tableValues">15 bpm</td>
                        </tr>
                        <tr>
                          <td className="tableValues">Shahul</td>
                          <td className="tableValues">86 bpm</td>
                          <td className="tableValues">36.4 C</td>
                          <td className="tableValues">97/60 mm Hg</td>
                          <td className="tableValues">15 bpm</td>
                        </tr>
                        <tr>
                          <td className="tableValues">Shahul</td>
                          <td className="tableValues">86 bpm</td>
                          <td className="tableValues">36.4 C</td>
                          <td className="tableValues">97/60 mm Hg</td>
                          <td className="tableValues">15 bpm</td>
                        </tr>
                        <tr>
                          <td className="tableValues">Shahul</td>
                          <td className="tableValues">86 bpm</td>
                          <td className="tableValues">36.4 C</td>
                          <td className="tableValues">97/60 mm Hg</td>
                          <td className="tableValues">15 bpm</td>
                        </tr>
                        <tr>
                          <td className="tableValues">Shahul</td>
                          <td className="tableValues">86 bpm</td>
                          <td className="tableValues">36.4 C</td>
                          <td className="tableValues">97/60 mm Hg</td>
                          <td className="tableValues">15 bpm</td>
                        </tr>
                        <tr>
                          <td className="tableValues">Shahul</td>
                          <td className="tableValues">86 bpm</td>
                          <td className="tableValues">36.4 C</td>
                          <td className="tableValues">97/60 mm Hg</td>
                          <td className="tableValues">15 bpm</td>
                        </tr>
                      </tbody>
                    </table>
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

export default ReportOfpatient;
