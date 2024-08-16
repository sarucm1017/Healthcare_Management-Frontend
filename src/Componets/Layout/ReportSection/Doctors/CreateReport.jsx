import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReport } from "../../../../Redux/Slices/ReportSlice";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import "./reportOfpatient.css";

const CreateReport = () => {
  const dispatch = useDispatch();
  const [reportData, setReportData] = useState({
    patientName: "",
    bloodGroup: "",
    pulseRate: "",
    breathingRate: "",
    bodyTemperature: "",
    bloodPressure: "",
    oxygenSaturation: "",
    height: "",
    weight: "",
    diagnosis: "",
    symptoms: "",
    currentMedications: "",
    prescribedTreatment: "",
    
  });

  const { loading, error } = useSelector((state) => state.report);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctorId = localStorage.getItem("userId");
    if (!doctorId) {
      // Handle the case where doctorId is not found
      console.error("Doctor ID is missing from local storage.");
      return;
    }
    const extendedReportData = {
      ...reportData,
      doctorId: doctorId, // Include doctor ID in report data
    };

    dispatch(createReport(extendedReportData))
      .unwrap()
      .then(() => {
        console.log("Report created successfully.");
      })
      .catch((err) => {
        console.error("Failed to create report:", err);
      });
  };

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
                <form action="" onSubmit={handleSubmit}>
                  <div className="col-md-12 maincontentsection">
                    <div className="save_report">
                      <div className="name_part">
                        <div className="report_inputMain">
                          <p>Patient Name</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="patientName"
                              value={reportData.patientName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn-saveReport"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Saving..." : "Create"}
                      </button>
                    </div>
                    <div className="reportadding_section">
                      <div className=" col-md-5 body_content-section">
                        <div className="report_inputMain">
                          <p>Blood Group</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="bloodGroup"
                              value={reportData.bloodGroup}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Pulse Rate</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="pulseRate"
                              value={reportData.pulseRate}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Breathing Rate</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="breathingRate"
                              value={reportData.breathingRate}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Body Temperature</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="bodyTemperature"
                              value={reportData.bodyTemperature}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Blood Pressure</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="bloodPressure"
                              value={reportData.bloodPressure}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Oxygen Saturation</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="oxygenSaturation"
                              value={reportData.oxygenSaturation}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" col-md-5 body_content-section">
                        <div className="report_inputMain">
                          <p>Height</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="height"
                              value={reportData.height}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Weight</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="weight"
                              value={reportData.weight}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Diagnosis</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="diagnosis"
                              value={reportData.diagnosis}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Symptoms</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="symptoms"
                              value={reportData.symptoms}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Current Medications</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="currentMedications"
                              value={reportData.currentMedications}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="report_inputMain">
                          <p>Prescribed Treatment</p>
                          <div className="report_inputBoxValues">
                            <input
                              type="text"
                              name="prescribedTreatment"
                              value={reportData.prescribedTreatment}
                              onChange={handleChange}
                              required
                            />
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
