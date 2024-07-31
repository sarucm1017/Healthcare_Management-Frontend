import React from "react";
import "./appointmentSection.css";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";

const BookAppointmentSection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <PatientsdashboardSidesection />
          <div className="col-md-10">
            <div className="main_home">
              <div className="nav_bar_section">
                <div className="left_section">
                  <div className="icon_part">
                    <i class="fa-solid fa-file-medical"></i>
                  </div>
                  <div className="title_part">
                    <h4>Book Appointment</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="body_content_section">
                <div className="col-md-12">
                  <div className="col-md-6 semi_profile_section">
                    <div className="semi_profile_topsection">
                      <div className="sub_title_depart">
                        <p>Cardiologist</p>
                      </div>
                      <div className="price">
                        <div className="value_head">
                          <p>Price</p>
                        </div>
                        <div className="value_range">
                          <p>500Rs - 2000Rs</p>
                        </div>
                      </div>
                    </div>
                    <div className="semi_profile_bottomsection">
                      <div>
                        <div className="profileimage_tag"></div>
                        <div className="profile_name">
                          <div className="profilename_section">
                            <p>Dr.Arya</p>
                          </div>
                          <div className="location">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>Thrissur , Kerala</p>
                          </div>
                        </div>
                      </div>
                      <div className="checkAvailability">
                        <div>
                          <i class="fa-solid fa-message"></i>
                        </div>
                        <div>
                          <button>Check Availability</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentSection;
