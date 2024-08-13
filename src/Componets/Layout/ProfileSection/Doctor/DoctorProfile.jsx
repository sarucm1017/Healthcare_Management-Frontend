import React from "react";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import defaultimage from "./defaultimage.jpg";

const DoctorProfile = () => {
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
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="title_part">
                    <h4>Profile</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="main_bannersection">
                <div className="col-md-12 maincontentsection">
                  <div className="profileHeader">
                    <div className="profileimage-navbarSection col-md-6">
                      <div className="profileImage_box">
                        <img src={defaultimage} alt="" />
                      </div>
                      <div className="profile_name_section">
                        <p>name</p>
                      </div>
                    </div>
                    <div className="btn_foredit col-md-6">
                      <i class="fa-solid fa-pen"></i>
                      <a href="/">
                        <p>Edit</p>
                      </a>
                    </div>
                  </div>
                  <div className="profileContent_section">
                    <div className=" col-md-5 body_content-section">
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-5 body_content-section">
                    <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Age</p>
                        <div className="profile_inputValue">
                          <p></p>
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

export default DoctorProfile;
