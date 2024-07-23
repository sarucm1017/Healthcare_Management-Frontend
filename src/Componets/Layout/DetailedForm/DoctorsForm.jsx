import React, { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitDoctorForm } from "../../../Redux/Slices/DoctorSlice";


const DoctorsForm = () => {
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
    agreeTerms: false,
    consentDataProcessing: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.doctor);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [id]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreeTerms && formData.consentDataProcessing) {
      dispatch(submitDoctorForm(formData)).then((response) => {
        if (!response.error) {
          navigate("/doctorsDashboard");
        }
      });
    } else {
      alert("Please agree to the terms and consent to data processing.");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="fullcontainer">
          <div className="main_container">
            <form onSubmit={handleSubmit}>
              <div className="col-md-12 form_details_section_doctors">
                <div>
                  <div className="doctors_from_heading">
                    <h4>Professional Information</h4>
                  </div>
                  <div className="form-main_section">
                    <div className="col-md-6">
                      <div className="form_section">
                        <div className="form_Fileds">
                          <label htmlFor="specialization">Specialization</label>
                          <input
                            id="specialization"
                            type="text"
                            value={formData.specialization}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="qualification">Qualification</label>
                          <input
                            id="qualification"
                            type="text"
                            value={formData.qualification}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="medicalLicenseNumber">
                            Medical License Number
                          </label>
                          <input
                            id="medicalLicenseNumber"
                            type="text"
                            value={formData.medicalLicenseNumber}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="yearsOfExperience">
                            Years of Experience
                          </label>
                          <input
                            id="yearsOfExperience"
                            type="number"
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="boardCertification">
                            Board Certification
                          </label>
                          <input
                            id="boardCertification"
                            type="text"
                            value={formData.boardCertification}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="currentlyWorkingHospitalName">
                            Currently Working Hospital Name
                          </label>
                          <input
                            id="currentlyWorkingHospitalName"
                            type="text"
                            value={formData.currentlyWorkingHospitalName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_section">
                        <div className="form_Fileds">
                          <label htmlFor="workPlaceContactNumber">
                            Work Place Contact Number
                          </label>
                          <input
                            id="workPlaceContactNumber"
                            type="text"
                            value={formData.workPlaceContactNumber}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="consultationHours">
                            Consultation Hours
                          </label>
                          <input
                            id="consultationHours"
                            type="text"
                            value={formData.consultationHours}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="availableDays">Available Days</label>
                          <input
                            id="availableDays"
                            type="text"
                            value={formData.availableDays}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="residencyProgram">
                            Residency Program
                          </label>
                          <input
                            id="residencyProgram"
                            type="text"
                            value={formData.residencyProgram}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="professionalMembership">
                            Professional Membership
                          </label>
                          <input
                            id="professionalMembership"
                            type="text"
                            value={formData.professionalMembership}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form_compliance">
                  <div>
                    <div className="legal_heading">
                      <h4>Legal Compliance</h4>
                    </div>
                    <div className="legal_main">
                      <div>
                        <div className="compliance_section">
                          <input
                            type="checkbox"
                            id="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                          />
                          <p>I Agree to the Terms and Conditions</p>
                        </div>
                        <div className="compliance_section">
                          <input
                            type="checkbox"
                            id="consentDataProcessing"
                            checked={formData.consentDataProcessing}
                            onChange={handleChange}
                          />
                          <p>I Consent to the Processing of my data</p>
                        </div>
                      </div>
                      <div className="form-submission">
                        <button type="submit" disabled={loading}>
                          {loading ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                      {error && <p className="error">{error}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="background"></div>
        <div className="overlay"></div>
      </div>
    </>
  );
};

export default DoctorsForm;
