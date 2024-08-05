import React from "react";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";
import "./patientProfile.css";

const PatientProfile = () => {
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
                  <i class="fa-solid fa-user"></i>
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
                        <div className="profileimage-navbarSection">
                            <div></div>
                            <div><p>Amal</p></div>
                        </div>
                        <div className="btn_foredit">
                            <div>edit</div>
                        </div>
                    </div>
                    <div className="profileBottom">
                    <div className=" col-md-5 body_content-section">
                        <div className="profile-heading"><h5>Contact Informations</h5></div>
                    <div className="profile_maininput">
                      <p>Age</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>Address</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>Emergency Contact Number</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>City</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>State</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>Country</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                  </div>
                  <div className=" col-md-5 body_content-section">
                  <div className="profile-heading"><h5>Medical  Informations</h5></div>
                  <div className="profile_maininput">
                      <p>Medical History</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>Current Medications</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>Allergies</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>Chronic Conditions</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>Health Insurance Provider</p>
                      <div className="profile_inputBox"><p></p></div>
                    </div>
                    <div className="profile_maininput">
                      <p>Health Insurance Ploice Number</p>
                      <div className="profile_inputBox"><p></p></div>
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
    )
}


export default PatientProfile;