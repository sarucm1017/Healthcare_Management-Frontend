import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientById } from "../../../../Redux/Slices/PatientSlice";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";
import "./patientProfile.css";
import defaultimage from "./defaultimage.jpg";

const PatientProfile = () => {
  const dispatch = useDispatch();
  const {
    data: patientData,
    loading,
    error,
  } = useSelector((state) => state.patient);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(fetchPatientById(userId));
    }
  }, [dispatch]);

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
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="title_part">
                    <h4>Profile</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="main_section">
                <div className="col-md-12 profilefullSection">
                  <div className="profileHeader">
                    <div className="profileimage-navbarSection col-md-6">
                      <div className="profileImage_box">
                        <img src={defaultimage} alt="" />
                      </div>
                      <div className="profile_name_section">
                        <p>{patientData.userName}</p>
                      </div>
                    </div>
                    <div className="btn_foredit col-md-6">
                      <i class="fa-solid fa-pen"></i>
                      <a href="/patientProfileEdit">
                        <p>Edit</p>
                      </a>
                    </div>
                  </div>
                  <div className="profileBottom">
                    <div className=" col-md-5 body_content-section">
                      <div className="profile-heading">
                        <h5>Contact Informations</h5>
                      </div>
                      <div className="profile_maininput">
                        <p>Age</p>
                        <div className="profile_inputBox">
                          <p>{patientData.age}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>Address</p>
                        <div className="profile_inputBox">
                          <p>{patientData.address}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>Emergency Contact Number</p>
                        <div className="profile_inputBox">
                          <p>{patientData.emergency_contact}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>City</p>
                        <div className="profile_inputBox">
                          <p>{patientData.city}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>State</p>
                        <div className="profile_inputBox">
                          <p>{patientData.state}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>Country</p>
                        <div className="profile_inputBox">
                          <p>{patientData.country}</p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-5 body_content-section">
                      <div className="profile-heading">
                        <h5>Medical Informations</h5>
                      </div>
                      <div className="profile_maininput">
                        <p>Medical History</p>
                        <div className="profile_inputBox">
                          <p>{patientData.medical_history}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>Current Medications</p>
                        <div className="profile_inputBox">
                          <p>{patientData.current_medications}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>Allergies</p>
                        <div className="profile_inputBox">
                          <p>{patientData.allergies}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>Chronic Conditions</p>
                        <div className="profile_inputBox">
                          <p>{patientData.chronic_conditions}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>Health Insurance Provider</p>
                        <div className="profile_inputBox">
                          <p>{patientData.chronic_conditions}</p>
                        </div>
                      </div>
                      <div className="profile_maininput">
                        <p>Health Insurance Ploice Number</p>
                        <div className="profile_inputBox">
                          <p>{patientData.health_insurance_policy_number}</p>
                        </div>
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

export default PatientProfile;
