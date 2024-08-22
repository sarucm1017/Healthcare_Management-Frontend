import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams  } from "react-router-dom";
import { fetchDoctorById } from "../../../../Redux/Slices/DoctorSlice";
import "./appointmentSection.css";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";
import Calendar from "./PaatientCalendar";
import PatientCalendar from "./PatientAppointmentCalendar";

const CheckAvailability = () => {
  const dispatch = useDispatch();
  const {doctorId} = useParams();
  console.log(doctorId, 'CheckAvailability doctorId');
  console.log(doctorId, "12");
  
  const doctor = useSelector((state) => state.doctor.selectedDoctor);
  const doctorStatus = useSelector((state) => state.doctor.status);

  useEffect(() => {
    if (doctorId) {
      dispatch(fetchDoctorById(doctorId));
    }
  }, [dispatch, doctorId]);
console.log(doctorId);

  // if (doctorStatus === "loading") {
  //   return <p>Loading...</p>;
  // } else if (doctorStatus === "failed") {
  //   return <p>Error fetching doctor details</p>;
  // }

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
                    <i className="fa-solid fa-file-medical"></i>
                  </div>
                  <div className="title_part">
                    <h4>Book Appointment</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="body_content_section bodysection">
                <div className="col-md-12 ">
                  <div className="main_top_section">
                  <div className="image_profile"></div>
                  <div className="name_dep">
                    <div className="nameof_doc">
                      {" "}
                      <p>{doctor?.userName}</p>
                    </div>
                    <div className="nameof_dept">
                    <p>{doctor?.specialization}</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-12 content_box-section">
                  <div className="col-md-6 box_scetion_bodySection">
                    <PatientCalendar />
                  </div>
                  <div className="col-md-6 time_section_main box_scetion_bodySection">
                    <div className="time_sections">
                      <div className="time_each_section">
                        <p>8.00 AM</p>
                      </div>
                      <div className="time_each_section">
                        <p>9.00 AM</p>
                      </div>
                      <div className="time_each_section">
                        <p>10.00 AM</p>
                      </div>
                      <div className="time_each_section">
                        <p>11.00 AM</p>
                      </div>
                    </div>
                    <div className="time_sections">
                      <div className="time_each_section">
                        <p>12.00 PM</p>
                      </div>
                      <div className="time_each_section">
                        <p>2.00 PM</p>
                      </div>
                      <div className="time_each_section">
                        <p>3.00 PM</p>
                      </div>
                      <div className="time_each_section">
                        <p>4.00 PM</p>
                      </div>
                    </div>
                    <div className="time_sections">
                      <div className="time_each_section">
                        <p>5.00 PM</p>
                      </div>
                      <div className="time_each_section">
                        <p>6.00 PM</p>
                      </div>
                      <div className="time_each_section">
                        <p>7.00 Pm</p>
                      </div>
                      <div className="time_each_section">
                        <p>8.00 Pm</p>
                      </div>
                    
                    </div>
                  </div>
                </div>
                <div className="availability_footer_section">
                    <div className="footerleft_section">
                        <p>Total Price</p>
                    </div>
                    <div className="footerright_section">
                        <p>Proceed To Pay</p>
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

export default CheckAvailability;
