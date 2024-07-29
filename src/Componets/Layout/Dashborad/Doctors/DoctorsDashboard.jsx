import React from "react";
import "./doctors.css";

const DoctorsDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <div className="col-md-2 side_section">
            <div className="Logo main">
              <div className="icon">
                <i className="fa-solid fa-hand-holding-medical"></i>
              </div>
              <div className="logoName">MedicalCare</div>
            </div>
            <div className="dashboard_menu">
              <div className="menu overview">
                <div className="menu_icon">
                  <i class="fa-solid fa-house"></i>
                </div>
                <div className="menu_title">
                  <p>Overview</p>
                </div>
              </div>
              <div className="menu Appointments">
                <div className="menu_icon">
                  <i class="fa-solid fa-file-medical"></i>
                </div>
                <div className="menu_title">
                  <p>Appointments</p>
                </div>
              </div>
              <div className="menu Message">
                <div className="menu_icon">
                  <i class="fa-solid fa-message"></i>
                </div>
                <div className="menu_title">
                  <p>Message</p>
                </div>
              </div>
              <div className="menu Profile">
                <div className="menu_icon">
                  <i class="fa-solid fa-user"></i>
                </div>
                <div className="menu_title">
                  <p>Profile</p>
                </div>
              </div>
              <div className="menu Reports">
                <div className="menu_icon">
                  <i class="fa-solid fa-chart-simple"></i>
                </div>
                <div className="menu_title">
                  <p>Reports</p>
                </div>
              </div>
              <div className="menu Settings">
                <div className="menu_icon">
                  <i class="fa-solid fa-gear"></i>
                </div>
                <div className="menu_title">
                  <p>Settings</p>
                </div>
              </div>
              <div className="menu Logout">
                <div className="menu_icon">
                  <i class="fa-solid fa-right-from-bracket"></i>
                </div>
                <div className="menu_title">
                  <p>Logout</p>
                </div>
              </div>
            </div>
            <div>
              <div className="helpcenter">
                <h4>Help Center</h4>
                <p>Having Trouble</p>
              </div>
              <div className="icon_class">
              <i class="fa-solid fa-handshake-angle"></i>
              </div>
            </div>
          </div>

          <div className="col-md-10">
            <div className="main_home">
              <div className="main_navbar">
                <div className="semi_profile">
                  <div className="profile_img">
                    <img src="" alt="" />
                  </div>
                  <div className="title">
                    Dr.Sonna
                    Cardiologist
                  </div>
                </div>
                <div className="searchbar">
                  <input type="text" />
                </div>
              </div>
              <div className="col-md-12 second_section">
                <div className="col-md-4 information_box">
                  <div className="icon_head">
                    <div className="icon_box">
                      <i class="fa-solid fa-hospital-user"></i>
                    </div>
                  </div>
                  <div className="information">
                    <p>Total Patients 200+</p>
                  </div>
                </div>
                <div className="col-md-4 information_box">
                  <div className="icon_head">
                    <div className="icon_box">
                      <i class="fa-solid fa-hospital-user"></i>
                    </div>
                  </div>
                  <div className="information">
                    <p>Total Patients 200+</p>
                  </div>
                </div>
                <div className="col-md-4 information_box">
                  <div className="icon_head">
                    <div className="icon_box">
                      <i class="fa-solid fa-hospital-user"></i>
                    </div>
                  </div>
                  <div className="information">
                    <p>Total Patients 200+</p>
                  </div>
                </div>
              </div>
              <div className="center_section">
                <div className="col-md-12 content_section">
                  <div className="col-md-5 appoiintment_section">
                    <div className="today_appointments">
                      <div className="section_heading">
                        <h4>Today Appointment</h4>
                      </div>
                      <div className="main_info_box">
                        <div className="info_box">
                          <div className="profile_image">
                            <img src="" alt="" />
                          </div>
                          <div className="main_info">
                            <h5>Ms. Mia</h5>
                            <p>Checkup</p>
                          </div>
                          <div>
                            <div className="time_info">
                              <p>On going</p>
                            </div>
                          </div>
                        </div>
                        <div className="info_box">
                          <div className="profile_image">
                            <img src="" alt="" />
                          </div>
                          <div className="main_info">
                            <h5>Ms. Mia</h5>
                            <p>Checkup</p>
                          </div>
                          <div>
                            <div className="time_info">
                              <p>On going</p>
                            </div>
                          </div>
                        </div>
                        <div className="info_box">
                          <div className="profile_image">
                            <img src="" alt="" />
                          </div>
                          <div className="main_info">
                            <h5>Ms. Mia</h5>
                            <p>Checkup</p>
                          </div>
                          <div>
                            <div className="time_info">
                              <p>On going</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="new_appointments">
                      <div className="section_heading">
                        <h4>New  Appointment</h4>
                      </div>
                      <div className="request_info">
                        <div className="profile_img"></div>
                        <div className="info_request">
                        <h5>Ms. Mia</h5>
                        <p>Checkup</p>
                        </div>
                        <div className="time_info">
                        <p>On going</p>
                        </div>
                      </div>
                      <div className="see_all_btn">

                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 appoiintment_section">
                    <div className="next_appointment">
                      <div className="section_heading">
                        <h4>Next Patient Details</h4>
                      </div>
                      <div className="box_info">
                        <div className="maininfo_box">
                          <div className="profile_img">
                            <img src="" alt="" />
                          </div>
                          <div className="pro_name">
                            <h5>Soniya</h5>
                            <p>Health Checkup</p>
                          </div>
                          <div className="info-box">
                            <h5>Appointment ID</h5>
                            <p>123456</p>
                          </div>
                        </div>
                        <div className="maininfo_box">
                          <div className="info-box">
                            <h5>D.O.B</h5>
                            <p>12 December 2000</p>
                          </div>
                          <div className="info-box">
                            <h5>Gender</h5>
                            <p>Female</p>
                          </div>
                          <div className="info-box">
                            <h5>Weight</h5>
                            <p>56 kg</p>
                          </div>
                        </div>
                        <div className="maininformation_box">
                          <div className="info-box">
                            <h5>Last appointment date</h5>
                            <p>10 June 2024</p>
                          </div>
                          <div className="info-box">
                            <h5>Height</h5>
                            <p>155 cm</p>
                          </div>
                        </div>
                        <div className="main_info_box">
                          <div className="info-box">
                            <h5>Patient History</h5>
                          </div>
                          <div className="medical-info_btns">
                          <div className="medical-info">
                           <p>Hypertension</p>
                          </div>
                          <div className="medical-info">
                            <p>Asthma</p>
                          </div>
                          </div>
                        </div>
                        <div className="maininfo_lastbox">
                          <div className="medical-info">
                            <p> <i class="fa-solid fa-phone"></i> +91 9870987234</p>
                          </div>
                          <div className="medical-info">
                            <p><i class="fa-solid fa-message"></i>Chat</p>
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
      </div>
    </>
  );
};

export default DoctorsDashboard;
