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
              <div className="menu_title">Overview</div>
            </div>
            <div className="menu Appointments">
              <div className="menu_icon">
              <i class="fa-solid fa-file-medical"></i>
              </div>
              <div className="menu_title">Appointments</div>
            </div>
            <div className="menu Message">
              <div className="menu_icon">
              <i class="fa-solid fa-message"></i>
              </div>
              <div className="menu_title">Message</div>
            </div>
            <div className="menu Profile">
              <div className="menu_icon">
              <i class="fa-solid fa-user"></i>
              </div>
              <div className="menu_title">Profile</div>
            </div>
            <div className="menu Reports">
              <div className="menu_icon">
              <i class="fa-solid fa-chart-simple"></i>
              </div>
              <div className="menu_title">Reports</div>
            </div>
            <div className="menu Settings">
              <div className="menu_icon">
              <i class="fa-solid fa-gear"></i>
              </div>
              <div className="menu_title">Settings</div>
            </div>
            <div className="menu Logout">
              <div className="menu_icon">
                <i class="fa-solid fa-right-from-bracket"></i></div>
              <div className="menu_title">Logout</div>
            </div>
          </div>
          <div></div>
          </div>
          
          <div className="col-md-10">
            <div className="main_home">
                <div className="main_navbar">
                  <div className="semi_profile">
                    <div className="profile_img">
                      <img src="" alt="" />
                    </div>
                    <div className="title">
                      <div className="name">Dr.Sonna</div>
                      <div className="depart">Cardiologist</div>
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
                      <p>
                        Total Patients 200+
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 information_box">
                  <div className="icon_head">
                    <div className="icon_box">
                    <i class="fa-solid fa-hospital-user"></i>
                    </div>
                    </div>
                    <div className="information">
                      <p>
                        Total Patients 200+
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 information_box">
                  <div className="icon_head">
                    <div className="icon_box">
                    <i class="fa-solid fa-hospital-user"></i>
                    </div>
                    </div>
                    <div className="information">
                      <p>
                        Total Patients 200+
                      </p>
                    </div>
                  </div>
                </div>
                <div className="center_section">
                  <div className="col-md-12">
                  <div className="col-md-5">

                  </div>  
                  <div className="col-md-7">

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
