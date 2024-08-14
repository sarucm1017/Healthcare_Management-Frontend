import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDoctorsDetailsById,
  updateDoctor,
} from "../../../../Redux/Slices/DoctorSlice";
import DoctorsDashboardSideSection from "../../Dashborad/Doctors/DoctorsDashboardSideSection";
import defaultimage from "./defaultimage.jpg";

const DoctorProfileUpdate = () => {
  const dispatch = useDispatch();
  const { data: doctorData } = useSelector((state) => state.doctor);
  const [formData, setFormData] = useState({
    specialization: "",
    qualification: "",
    medicalLicenseNumber: "",
    yearsOfExperience: "",
    boardCertification: "",
    currentlyWorkingHospitalName: "",
    workPlaceContactNumber: "",
    consultationHours: "",
    availableDays: "",
    residencyProgram: "",
    professionalMembership: "",
    location: "",
  });
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(fetchDoctorsDetailsById(userId));
    }
  }, [dispatch]);
  useEffect(() => {
    if (doctorData) {
      setFormData({
        specialization: doctorData.specialization || "",
        qualification: doctorData.qualification || "",
        medicalLicenseNumber: doctorData.medicalLicenseNumber || "",
        yearsOfExperience: doctorData.yearsOfExperience || "",
        boardCertification: doctorData.boardCertification || "",
        currentlyWorkingHospitalName:doctorData.currentlyWorkingHospitalName || "",
        workPlaceContactNumber: doctorData.workPlaceContactNumber || "",
        consultationHours: doctorData.consultationHours || "",
        availableDays: doctorData.availableDays || "",
        residencyProgram: doctorData.residencyProgram || "",
        professionalMembership: doctorData.professionalMembership || "",
        location: doctorData.location,
      });
    }
  }, [doctorData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(updateDoctor({ userId, ...formData }));
    }
  };
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
                  <form action="" onSubmit={handleSubmit}>
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
                      <button onClick={handleSubmit}>Save Changes</button>
                      </div>
                    </div>
                    <div className="profileContent_section">
                      <div className=" col-md-5 body_content-section">
                        <div className="profile_input_title">
                          <p>Specialization</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="specialization"
                              value={formData.specialization}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Qualification</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="qualification"
                              value={formData.qualification}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Medical License Number</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="medicalLicenseNumber"
                              value={formData.medicalLicenseNumber}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Year of Experience</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="yearsOfExperience"
                              value={formData.yearsOfExperience}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Board Certification</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="boardCertification"
                              value={formData.boardCertification}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Currently Working Hospital Name</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="currentlyWorkingHospitalName"
                              value={formData.currentlyWorkingHospitalName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" col-md-5 body_content-section">
                        <div className="profile_input_title">
                          <p>Consultation Hours</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="consultationHours"
                              value={formData.consultationHours}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Available days</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="availableDays"
                              value={formData.availableDays}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Resideny Program</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="residencyProgram"
                              value={formData.residencyProgram}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Professional Membership</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="professionalMembership"
                              value={formData.professionalMembership}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Work Place Contact Number</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="workPlaceContactNumber"
                              value={formData.workPlaceContactNumber}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="profile_input_title">
                          <p>Location</p>
                          <div className="profile_inputValue">
                          <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfileUpdate;
