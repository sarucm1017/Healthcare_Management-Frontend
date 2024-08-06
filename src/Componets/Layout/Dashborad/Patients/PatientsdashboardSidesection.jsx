import React from "react";

const PatientsdashboardSidesection = () => {
  return (
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
            <i class="fa-solid fa-house"></i>
            <a href="/patientsDashboard">
              <p>Overview</p>
            </a>
          </div>
          <div className="menu Appointments">
            <i class="fa-solid fa-file-medical"></i>
            <a href="/appointmentSectionPatient">
              <p>Appointments</p>
            </a>
          </div>
          <div className="menu Message">
            <i class="fa-solid fa-message"></i>
            <p>Message</p>
          </div>
          <div className="menu Profile">
            <i class="fa-solid fa-user"></i>
            <p>Profile</p>
          </div>
          <div className="menu Reports">
            <i class="fa-solid fa-chart-simple"></i>
            <p>Reports</p>
          </div>
          <div className="menu Logout">
            <i class="fa-solid fa-right-from-bracket"></i>
            <p>Logout</p>
          </div>
        </div>
        <div className="helpcenter_section">
          <div>
            <h4>Help Center</h4>
            <p>Having Trouble</p>
          </div>
          <div className="icon_class_helpCenter">
            <i class="fa-solid fa-handshake-angle"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default PatientsdashboardSidesection;
