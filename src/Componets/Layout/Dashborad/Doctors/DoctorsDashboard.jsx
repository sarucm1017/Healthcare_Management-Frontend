import React from "react";
import "./doctors.css";

const DoctorsDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <div className="col-md-3">
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
          
          <div className="col-md-9">
            <div className="main_home">
                <h1>fjvgfhd</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsDashboard;
