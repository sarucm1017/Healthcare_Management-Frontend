import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./reportOfpatient.css";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import defaultimage from "./defaultimage.jpg";
import { fetchReportById } from "../../../../Redux/Slices/ReportSlice";

const ReportDetailsOfPatients = () => {
  const {reportId} = useParams();
  
  const dispatch = useDispatch();
  const {report,  loading, error } = useSelector((state)  => state.report);

  useEffect(() => {
    if (reportId) {
      dispatch(fetchReportById(reportId));
    }
  }, [dispatch, reportId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!report) return <p>No report found</p>;
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
              <div className="col-md-12 bodyContainer">
                <div className="reportNavbar">
                  <div className="patientDetails">
                    <div className="patientdetails-profileimage">
                      <img src={defaultimage} alt="defaultimage" />
                    </div>
                    <div className="patientdetails-name">
                      <p>{report.patientName}</p>
                    </div>
                  </div>
                  <div className="popBtns"></div>
                </div>
                <div className="reportDetils-bodySection">
                  <div className=" col-md-5 body_content-section">
                    <div className="report_maininput">
                      <p>Blood Group</p>
                      <div className="report_inputBox">
                        <p>{report.bloodGroup}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Pulse Rate</p>
                      <div className="report_inputBox">
                        <p>{report.pulseRate}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Breathing Rate</p>
                      <div className="report_inputBox">
                        <p>{report.breathingRate}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Body Temperature</p>
                      <div className="report_inputBox">
                        <p>{report.bodyTemperature}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Blood Pressure</p>
                      <div className="report_inputBox">
                        <p>{report.bloodPressure}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Oxygen Saturation</p>
                      <div className="report_inputBox">
                      <p>{report.oxygenSaturation}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-5 body_content-section">
                    <div className="report_maininput">
                      <p>Height</p>
                      <div className="report_inputBox">
                      <p>{report.height}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Weight</p>
                      <div className="report_inputBox">
                      <p>{report.weight}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Diagnosis</p>
                      <div className="report_inputBox">
                      <p>{report.diagnosis}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Symptoms</p>
                      <div className="report_inputBox">
                      <p>{report.symptoms}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Current Medications</p>
                      <div className="report_inputBox">
                      <p>{report.currentMedications}</p>
                      </div>
                    </div>
                    <div className="report_maininput">
                      <p>Prescribed Treatment</p>
                      <div className="report_inputBox">
                      <p>{report.prescribedTreatment}</p>
                      </div>
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

export default ReportDetailsOfPatients;
