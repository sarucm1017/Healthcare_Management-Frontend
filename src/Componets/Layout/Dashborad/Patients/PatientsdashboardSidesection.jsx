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
            <i className="fa-solid fa-house"></i>
            <a href="/patientsDashboard/:userId">
              <p>Overview</p>
            </a>
          </div>
          <div className="menu Appointments">
            <i className="fa-solid fa-file-medical"></i>
            <a href="/appointmentSectionPatient">
              <p>Appointments</p>
            </a>
          </div>
          <div className="menu Message">
            <i className="fa-solid fa-message"></i>
            <a href="/patientmessage"><p>Message</p></a>
          </div>
          <div className="menu Profile">
            <i className="fa-solid fa-user"></i>
            <a href="/patientProfile"><p>Profile</p></a>
          </div>
          <div className="menu Reports">
            <i className="fa-solid fa-chart-simple"></i>
            <a href="/patientReport"><p>Reports</p></a>
          </div>
          <div className="menu Logout">
            <i className="fa-solid fa-right-from-bracket"></i>
           <a href="/login"> <p>Logout</p></a>
          </div>
        </div>
        <div className="helpcenter_section">
          <div>
            <h4>Help Center</h4>
            <p>Having Trouble</p>
          </div>
          <div className="icon_class_helpCenter">
            <i className="fa-solid fa-handshake-angle"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default PatientsdashboardSidesection;
