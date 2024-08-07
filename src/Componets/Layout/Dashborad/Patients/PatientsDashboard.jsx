import React, {useEffect} from "react";
import "./patients.css";
import welcomeimage from "./welcome image.png";
import PatientsdashboardSidesection from "./PatientsdashboardSidesection";
import DashboardCalendar from "../../AppointmentSection/Patients/DashboardCalendarPatient";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientData } from "../../../../Redux/Slices/PatientSlices/DashboardSlice";

const PatientsDashboard = ({userId}) => {
  const dispatch = useDispatch();
  const {patient, status, error} = useSelector((state) => state.patient);
  console.log('state.patient:', patient);

  useEffect(() => {
    console.log('User ID in Component:', userId);
    if(userId){
      dispatch(fetchPatientData(userId))
    }
  }, [dispatch, userId])

  useEffect(() => {
    console.log('Patient Data:', patient);
  }, [patient]);
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <PatientsdashboardSidesection />

          <div className="col-md-10">
            <div className="main_home">
              <div className="navbar">
                <div className="navbar_content">
                {status === 'loading' ? (
                    <h4>Loading...</h4>
                  ) : error ? (
                    <h4>Error: {error}</h4>
                  ) : (
                    <h4>Good Morning {patient ? patient.userName : 'Patient'}</h4>
                  )}
                  <p>How are you feeling</p>
                </div>
                <div className="navbar_topend">
                  <div className="search_bar"></div>
                  <div className="profile"></div>
                </div>
              </div>
              <div className="col-md-12 page_main_section">
                <div className="col-md-8">
                  <div className="col-md-12 ">
                    <div className="welcome_section">
                      <div className="contents_section">
                        <div className="main_content">
                          <h4>Find best doctors with Medical Care</h4>
                        </div>
                        <div className="sub_content">
                          <p>
                            Appoint the Doctor and get finest medical service{" "}
                          </p>
                        </div>
                      </div>
                      <div className="image_content_section">
                        <img src={welcomeimage} alt="" />
                      </div>
                    </div>
                    <div className="vital_section">
                      <div className="section_heading">
                        <h4>Vitals</h4>
                      </div>
                      <div className="vitral_infomation">
                        <div className="body_information">
                          <h5>Temparature</h5>
                          <p>36.2 c</p>
                        </div>
                        <div className="body_information extra">
                          <h5>pluse</h5>
                          <p> 80 bpm</p>
                        </div>
                        <div className="body_information">
                          <h5>body pressure</h5>
                          <p>80/70 mm/hg</p>
                        </div>
                        <div className="body_information">
                          <h5>Breathing rate</h5>
                          <p>15 Breath/m</p>
                        </div>
                      </div>
                    </div>
                    <div className="appointment_section">
                      <div className="section_heading">
                        <h4> Appointments</h4>
                      </div>
                      <div className="table_section">
                        <table>
                          <thead className="table_heading">
                            <tr>
                              <th>Doctor's Name</th>
                              <th>Specialisation</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Status</th>
                            </tr>
                            <tr></tr>
                          </thead>
                          <tbody className="table_body">
                            <tr>
                              <td>
                                <div className="profile_section">
                                  <div className="prf_image"></div>
                                  <div className="name_section">
                                    <p>Ranvir</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p>Cardiologist</p>
                              </td>
                              <td>
                                <p>12/2/2024</p>
                              </td>
                              <td>
                                <p>12:30pm</p>
                              </td>
                              <td>
                                <p>Active</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="profile_section">
                                  <div className="prf_image"></div>
                                  <div className="name_section">
                                    <p>Ranvir</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p>Cardiologist</p>
                              </td>
                              <td>
                                <p>12/2/2024</p>
                              </td>
                              <td>
                                <p>12:30pm</p>
                              </td>
                              <td>
                                <p>Active</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="profile_section">
                                  <div className="prf_image"></div>
                                  <div className="name_section">
                                    <p>Ranvir</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p>Cardiologist</p>
                              </td>
                              <td>
                                <p>12/2/2024</p>
                              </td>
                              <td>
                                <p>12:30pm</p>
                              </td>
                              <td>
                                <p>Active</p>
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="semi_reports">
                    <div className="report_head_section">
                      <div className="report_title">
                        <p>Reports</p>
                      </div>
                      <div className="report_icon">
                        <i class="fa-solid fa-chart-simple"></i>
                      </div>
                    </div>
                    <div className="reports_section">
                      <div className="report_name_section">
                        <div className="section_icon">
                          <i class="fa-regular fa-file-lines"></i>
                        </div>
                        <div className="report_name">
                          <p>Glucose</p>
                        </div>
                      </div>
                      <div className="report_time">
                        <p>2/10/2024</p>{" "}
                      </div>
                    </div>
                    <div className="reports_section">
                      <div className="report_name_section">
                        <div className="section_icon">
                          <i class="fa-regular fa-file-lines"></i>
                        </div>
                        <div className="report_name">
                          <p>Glucose</p>
                        </div>
                      </div>
                      <div className="report_time">
                        <p>2/10/2024</p>{" "}
                      </div>
                    </div>
                    <div className="reports_section">
                      <div className="report_name_section">
                        <div className="section_icon">
                          <i class="fa-regular fa-file-lines"></i>
                        </div>
                        <div className="report_name">
                          <p>Glucose</p>
                        </div>
                      </div>
                      <div className="report_time">
                        <p>2/10/2024</p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="dashbordCalendar">
                    <DashboardCalendar/>
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

export default PatientsDashboard;
