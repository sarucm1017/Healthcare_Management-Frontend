import React, {useEffect} from "react";
import "./doctors.css";
import DoctorsDashboardSideSection from "./DoctorsDashboardSideSection";
import defaultimage from "./defaultimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../../Redux/Slices/UserSlice";

const DoctorsDashboard = () => {
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();
  const userData  = useSelector((state) => state.user);
  console.log(userData, "20");
  
  
  useEffect ( () => {
    if(userId) {
      const token = localStorage.getItem("token");
      const storedUserData = localStorage.getItem('userData');
      const role = localStorage.getItem('role');

      let parsedUserData = null;
      try {
        parsedUserData = JSON.parse(storedUserData);
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
      if (parsedUserData && token && role) {
        dispatch(setUserData({ userData: parsedUserData, userId, token, role }));
        console.log('userData from Redux state 40:', userData);
      } else {
        console.error("Invalid data for local storage", { parsedUserData, token, role });
      }
    }
  }, [dispatch, userId])
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <DoctorsDashboardSideSection/>
          <div className="col-md-10">
            <div className="main_home">
              <div className="main_navbar">
                <div className="semi_profile">
                  <div className="profile_img">
                  <img src={defaultimage} alt="" />
                  </div>
                  <div className="title">
                    <h4>{userData.userData.name || 'Doctor'}</h4>
                  <p>{userData.userData.specialization || 'Doctor'}</p>
                  </div>
                </div>
                <div className="searchbar">
                  <input type="text" />
                </div>
              </div>
              <div className="col-md-12 second_section">
                <div className="col-md-4 information_box">
                  <div className="icon_head">
                    <div className="icon_box">
                      <i class="fa-solid fa-hospital-user"></i>
                    </div>
                  </div>
                  <div className="information">
                    <p>Total Patients 200+</p>
                  </div>
                </div>
                <div className="col-md-4 information_box">
                  <div className="icon_head">
                    <div className="icon_box">
                      <i class="fa-solid fa-hospital-user"></i>
                    </div>
                  </div>
                  <div className="information">
                    <p>Total Patients 200+</p>
                  </div>
                </div>
                <div className="col-md-4 information_box">
                  <div className="icon_head">
                    <div className="icon_box">
                      <i class="fa-solid fa-hospital-user"></i>
                    </div>
                  </div>
                  <div className="information">
                    <p>Total Patients 200+</p>
                  </div>
                </div>
              </div>
              <div className="center_section">
                <div className="col-md-12 content_section">
                  <div className="col-md-5 appoiintment_section">
                    <div className="today_appointments">
                      <div className="section_heading">
                        <h4>Today Appointment</h4>
                      </div>
                      <div className="main_info_box">
                        <div className="info_box">
                          <div className="profile_image">
                            <img src="" alt="" />
                          </div>
                          <div className="main_info">
                            <h5>Ms. Mia</h5>
                            <p>Checkup</p>
                          </div>
                          <div>
                            <div className="time_info">
                              <p>On going</p>
                            </div>
                          </div>
                        </div>
                        <div className="info_box">
                          <div className="profile_image">
                            <img src="" alt="" />
                          </div>
                          <div className="main_info">
                            <h5>Ms. Mia</h5>
                            <p>Checkup</p>
                          </div>
                          <div>
                            <div className="time_info">
                              <p>On going</p>
                            </div>
                          </div>
                        </div>
                        <div className="info_box">
                          <div className="profile_image">
                            <img src="" alt="" />
                          </div>
                          <div className="main_info">
                            <h5>Ms. Mia</h5>
                            <p>Checkup</p>
                          </div>
                          <div>
                            <div className="time_info">
                              <p>On going</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="new_appointments">
                      <div className="section_heading">
                        <h4>New  Appointment</h4>
                      </div>
                      <div className="request_info">
                        <div className="profile_img"></div>
                        <div className="info_request">
                        <h5>Ms. Mia</h5>
                        <p>Checkup</p>
                        </div>
                        <div className="time_info">
                        <p>On going</p>
                        </div>
                      </div>
                      <div className="see_all_btn">

                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 appoiintment_section">
                    <div className="next_appointment">
                      <div className="section_heading">
                        <h4>Next Patient Details</h4>
                      </div>
                      <div className="box_info">
                        <div className="maininfo_box">
                          <div className="profile_img">
                            <img src="" alt="" />
                          </div>
                          <div className="pro_name">
                            <h5>Soniya</h5>
                            <p>Health Checkup</p>
                          </div>
                          <div className="info-box">
                            <h5>Appointment ID</h5>
                            <p>123456</p>
                          </div>
                        </div>
                        <div className="maininfo_box">
                          <div className="info-box">
                            <h5>D.O.B</h5>
                            <p>12 December 2000</p>
                          </div>
                          <div className="info-box">
                            <h5>Gender</h5>
                            <p>Female</p>
                          </div>
                          <div className="info-box">
                            <h5>Weight</h5>
                            <p>56 kg</p>
                          </div>
                        </div>
                        <div className="maininformation_box">
                          <div className="info-box">
                            <h5>Last appointment date</h5>
                            <p>10 June 2024</p>
                          </div>
                          <div className="info-box">
                            <h5>Height</h5>
                            <p>155 cm</p>
                          </div>
                        </div>
                        <div className="main_info_box">
                          <div className="info-box">
                            <h5>Patient History</h5>
                          </div>
                          <div className="medical-info_btns">
                          <div className="medical-info">
                           <p>Hypertension</p>
                          </div>
                          <div className="medical-info">
                            <p>Asthma</p>
                          </div>
                          </div>
                        </div>
                        <div className="maininfo_lastbox">
                          <div className="medical-info">
                            <p> <i class="fa-solid fa-phone"></i> +91 9870987234</p>
                          </div>
                          <div className="medical-info">
                            <p><i class="fa-solid fa-message"></i>Chat</p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default DoctorsDashboard;
