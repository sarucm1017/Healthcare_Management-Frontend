import React from "react";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import './appointmentDocto.css'

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
                    <div className="appointmentClass all"><p>All</p></div>
                    <div className="appointmentClass upcoming"><p>Upcoming</p></div>
                    <div className="appointmentClass completed"><p>Completed</p></div>
                    <div className="appointmentClass cancled"><p>Cancled</p></div>
                  </div>
                  <div className="appointmentnavbar-right">
                    <div className="classAppointment cancled"><p>New Appointment</p></div>
                  </div>
                </div>
                <div className="appointmentmainBody">
                <table className="reportTable">
                      <thead>
                        <tr>
                          <th className="Appointment-table-header">Patient Name</th>
                          <th className="Appointment-table-header">Date</th>
                          <th className="Appointment-table-header">Time</th>
                          <th className="Appointment-table-header">Specification</th>
                          <th className="Appointment-table-header">Contact</th>
                        </tr>
                      </thead>
                      <tbody className="table-bodyContent">
                        
                          <tr >
                            <td className="Appointment-tableValues"></td>
                            <td className="Appointment-tableValues"></td>
                            <td className="Appointment-tableValues"></td>
                            <td className="Appointment-tableValues"></td>
                            <td className="Appointment-tableValues"></td>
                          </tr>
                     
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentSectionDoctor;
