import React from "react";

const PatientsdashboardSidesection = () => {
    return(
        <>
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
        </>
    )
}
export default PatientsdashboardSidesection;