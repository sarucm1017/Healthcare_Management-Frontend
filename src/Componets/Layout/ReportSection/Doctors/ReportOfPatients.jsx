import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import "./reportOfpatient.css";
import { fetchReportsByDoctorId } from "../../../../Redux/Slices/ReportSlice";

const ReportOfpatient = () => {
  const dispatch = useDispatch();
  const {report, loading, error} = useSelector((state) => state.report);

  const  doctorId = localStorage.getItem("roleSpecificId");

  useEffect(() => {
    if (doctorId) {
      dispatch(fetchReportsByDoctorId(doctorId));
    }
  }, [dispatch, doctorId]);

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
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : (
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
                        {report.map((report) => (
                          <tr key={report._id}>
                            <td className="tableValues">{report.patientName}</td>
                            <td className="tableValues">{report.pulseRate} bpm</td>
                            <td className="tableValues">{report.bodyTemperature} C</td>
                            <td className="tableValues">{report.bloodPressure}</td>
                            <td className="tableValues">{report.breathingRate} bpm</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
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
