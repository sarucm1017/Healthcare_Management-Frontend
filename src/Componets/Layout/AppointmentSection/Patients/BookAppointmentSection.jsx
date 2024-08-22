
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from "../../../../Redux/Slices/DoctorSlice";
import PatientsdashboardSidesection from '../../Dashborad/Patients/PatientsdashboardSidesection';
import './appointmentSection.css';

const BookAppointmentSection = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors);
  const doctorsStatus = useSelector((state) => state.doctor.status);
  const error = useSelector((state) => state.doctor.error);

  useEffect(() => {
    if (doctorsStatus === 'idle') {
      dispatch(fetchDoctors());
    }
  }, [doctorsStatus, dispatch]);

  let content;

  if (doctorsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (doctorsStatus === 'succeeded') {
    content = doctors.map((doctor) => (
      <div className="col-md-6 semi_profile_section" key={doctor._id}>
        <div className="semi_profile_topsection">
          <div className="sub_title_depart">
            <p>{doctor.specialization}</p>
          </div>
          <div className="price">
            <div className="value_head">
              <p>Price</p>
            </div>
            <div className="value_range">
              
            </div>
          </div>
        </div>
        <div className="semi_profile_bottomsection">
          <div>
            <div className="profileimage_tag">
             
            </div>
            <div className="profile_name">
              <div className="profilename_section">
                <p>{doctor.userName}</p>
              </div>
              <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <p>{doctor.location}</p>
              </div>
            </div>
          </div>
          <div className="checkAvailability">
            <div className="check_msg">
              <i className="fa-solid fa-message"></i>
            </div>
            <div className="check_btn">
              <button><a href={`/checkAvailability/${doctor._id}`}>Check Availability</a></button>              
            </div>
          </div>
        </div>
      </div>
    ));
  } else if (doctorsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className="container-fluid">
      <div className="col-md-12 full_container">
        <PatientsdashboardSidesection />
        <div className="col-md-10">
          <div className="main_home">
            <div className="nav_bar_section">
              <div className="left_section">
                <div className="icon_part">
                  <i className="fa-solid fa-file-medical"></i>
                </div>
                <div className="title_part">
                  <h4>Book Appointment</h4>
                </div>
              </div>
              <div className="right_section"></div>
            </div>
            <div className="body_content_section">
              <div className="col-md-12 main_profile_section">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentSection;
