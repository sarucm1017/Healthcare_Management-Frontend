import React from "react";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";

const AppointmentSectionDoctor = () => {
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
                  <i className="fa-solid fa-file-medical"></i>
                  </div>
                  <div className="title_part">
                    <h4>Appointment</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="AppointMainSection">
                <div className="appointmentNavbar">
                    <div className="appointmentnavbar-left">
                    <div className="classification all"> All</div>
                        <div className="classification active">Active</div>
                        <div className="classification upcoming">Upcoming</div>
                        <div className="classification completed">Completed</div>
                        <div className="classification cancled">Cancled</div>
                    </div>
                    <div className="appointmentnavbar-right">
                    <div className="classification cancled">New Appointment</div>
                    </div>
                </div>
                <div className="appointmentmainBody"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentSectionDoctor;
