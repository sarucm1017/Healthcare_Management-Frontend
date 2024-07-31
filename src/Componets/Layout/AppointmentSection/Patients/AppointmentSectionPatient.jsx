import React from "react";
import "./appointmentSection.css";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";

const AppointmentSectionPatient = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <PatientsdashboardSidesection/>
          <div className="col-md-10">
            <div className="main_home">
              <div className="nav_bar_section">
                <div className="left_section">
                    <div className="icon_part">
                    <i class="fa-solid fa-file-medical"></i>
                    </div>
                    <div className="title_part">
                        <h4>Appointment</h4>
                    </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="body_section">
                <div className="body_headSection">
                    <div className="classification_all">
                        <div className="classification all"> All</div>
                        <div className="classification active">Active</div>
                        <div className="classification upcoming">Upcoming</div>
                        <div className="classification completed">Completed</div>
                        <div className="classification cancled">Cancled</div>
                    </div>
                    <div className="mainblue_btn">
                        <button className="main_btn">Book Appointment</button>
                    </div>
                </div>
                <div className="body_contnet_section">
                    <table className="table_style">
                        <thead>
                            <tr>
                                <th className="table_header">Doctors</th>
                                <th className="table_header">Specification</th>
                                <th className="table_header">Date</th>
                                <th className="table_header">Time</th>
                                <th className="table_header">Price</th>
                                <th className="table_header">Status</th>
                            </tr>
                        </thead>
                     
                      <tbody className="table_content">
                            <tr>
                                <td className="table_body_content">Shahul</td>
                                <td className="table_body_content">Cardiologiest</td>
                                <td className="table_body_content">11/2/2024</td>
                                <td className="table_body_content">11.30AM</td>
                                <td className="table_body_content">500 Rs</td>
                                <td className="table_body_content">Completed</td>
                            </tr>
                            <tr>
                                <td className="table_body_content">Shahul</td>
                                <td className="table_body_content">Cardiologiest</td>
                                <td className="table_body_content">11/2/2024</td>
                                <td className="table_body_content">11.30AM</td>
                                <td className="table_body_content">500 Rs</td>
                                <td className="table_body_content">Completed</td>
                            </tr>
                            <tr>
                                <td className="table_body_content">Shahul</td>
                                <td className="table_body_content">Cardiologiest</td>
                                <td className="table_body_content">11/2/2024</td>
                                <td className="table_body_content">11.30AM</td>
                                <td className="table_body_content">500 Rs</td>
                                <td className="table_body_content">Completed</td>
                            </tr>
                            <tr>
                                <td className="table_body_content">Shahul</td>
                                <td className="table_body_content">Cardiologiest</td>
                                <td className="table_body_content">11/2/2024</td>
                                <td className="table_body_content">11.30AM</td>
                                <td className="table_body_content">500 Rs</td>
                                <td className="table_body_content">Completed</td>
                            </tr>
                            <tr>
                                <td className="table_body_content">Shahul</td>
                                <td className="table_body_content">Cardiologiest</td>
                                <td className="table_body_content">11/2/2024</td>
                                <td className="table_body_content">11.30AM</td>
                                <td className="table_body_content">500 Rs</td>
                                <td className="table_body_content">Completed</td>
                            </tr>
                            <tr>
                                <td className="table_body_content">Shahul</td>
                                <td className="table_body_content">Cardiologiest</td>
                                <td className="table_body_content">11/2/2024</td>
                                <td className="table_body_content">11.30AM</td>
                                <td className="table_body_content">500 Rs</td>
                                <td className="table_body_content">Completed</td>
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

export default AppointmentSectionPatient;
