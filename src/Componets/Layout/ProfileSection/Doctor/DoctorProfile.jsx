import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import defaultimage from "./defaultimage.jpg";
import { fetchDoctorsDetailsById } from "../../../../Redux/Slices/DoctorSlice";
import "./doctorprofile.css";

const DoctorProfile = () => {
    const dispatch = useDispatch();
    const {
        data: doctorData,
        loading,
        error,
      } = useSelector((state) => state.doctor);
      useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
          dispatch(fetchDoctorsDetailsById(userId));
        }
      }, [dispatch]);
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
                        <p>{doctorData.userName}</p>
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
                        <p>Specialization</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.specialization}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Qualification</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.qualification}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Medical License Number</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.medicalLicenseNumber}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Year of Experience</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.yearsOfExperience}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Board Certification</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.boardCertification}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Currently Working Hospital Name</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.currentlyWorkingHospitalName}</p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-5 body_content-section">
                    <div className="profile_input_title">
                        <p>Consultation Hours</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.consultationHours}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Available days</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.availableDays}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Resideny Program</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.residencyProgram}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Professional Membership</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.professionalMembership}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Work Place Contact Number</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.workPlaceContactNumber}</p>
                        </div>
                      </div>
                      <div className="profile_input_title">
                        <p>Location</p>
                        <div className="profile_inputValue">
                          <p>{doctorData.location}</p>
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
