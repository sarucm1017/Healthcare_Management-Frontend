import React, { useEffect } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { submitDoctorForm } from "../../../Redux/Slices/DoctorSlice";

const DoctorsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const { loading, error } = useSelector((state) => state.doctor);

  useEffect(() => {
    console.log("User email:", email);
  }, [email]);

  const onSubmit = async (data) => {
     if (!email) {
      console.error("User email is not available.");
      return;
    }
    const payload = { ...data, userEmail: email };
    console.log("Submitting Data:", payload);

    try {
      const response = await dispatch(submitDoctorForm(payload)).unwrap();
      if (!response.error) {
        localStorage.setItem("userID", response.userID);
        localStorage.setItem("doctorId", response.doctorId);
        
      
         // Navigate to the login page
         navigate("/login");
      } else {
        console.error("Error saving doctor data:", response.error);
      }
    } catch (error) {
      console.error("Error saving doctor data:", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="fullcontainer">
          <div className="main_container">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                            {...register('specialization', { required: true })}
                          />
                          {errors.specialization && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="qualification">Qualification</label>
                          <input
                            id="qualification"
                            type="text"
                            {...register('qualification', { required: true })}
                          />
                          {errors.qualification && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="medicalLicenseNumber">Medical License Number</label>
                          <input
                            id="medicalLicenseNumber"
                            type="text"
                            {...register('medicalLicenseNumber', { required: true })}
                          />
                          {errors.medicalLicenseNumber && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="yearsOfExperience">Years of Experience</label>
                          <input
                            id="yearsOfExperience"
                            type="number"
                            {...register('yearsOfExperience', { required: true })}
                          />
                          {errors.yearsOfExperience && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="boardCertification">Board Certification</label>
                          <input
                            id="boardCertification"
                            type="text"
                            {...register('boardCertification', { required: true })}
                          />
                          {errors.boardCertification && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="currentlyWorkingHospitalName">Currently Working Hospital Name</label>
                          <input
                            id="currentlyWorkingHospitalName"
                            type="text"
                            {...register('currentlyWorkingHospitalName', { required: true })}
                          />
                          {errors.currentlyWorkingHospitalName && <p className="error">This field is required</p>}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_section">
                        <div className="form_Fileds">
                          <label htmlFor="workPlaceContactNumber">Work Place Contact Number</label>
                          <input
                            id="workPlaceContactNumber"
                            type="text"
                            {...register('workPlaceContactNumber', { required: true })}
                          />
                          {errors.workPlaceContactNumber && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="consultationHours">Consultation Hours</label>
                          <input
                            id="consultationHours"
                            type="text"
                            {...register('consultationHours', { required: true })}
                          />
                          {errors.consultationHours && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="availableDays">Available Days</label>
                          <input
                            id="availableDays"
                            type="text"
                            {...register('availableDays', { required: true })}
                          />
                          {errors.availableDays && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="residencyProgram">Residency Program</label>
                          <input
                            id="residencyProgram"
                            type="text"
                            {...register('residencyProgram', { required: true })}
                          />
                          {errors.residencyProgram && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="professionalMembership">Professional Membership</label>
                          <input
                            id="professionalMembership"
                            type="text"
                            {...register('professionalMembership', { required: true })}
                          />
                          {errors.professionalMembership && <p className="error">This field is required</p>}
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="location">Location</label>
                          <input
                            id="location"
                            type="text"
                            {...register('location', { required: true })}
                          />
                          {errors.location && <p className="error">This field is required</p>}
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
                            {...register('agreeTerms', { required: true })}
                          />
                          <p>I Agree to the Terms and Conditions</p>
                          {errors.agreeTerms && <p className="error">This field is required</p>}
                        </div>
                        <div className="compliance_section">
                          <input
                            type="checkbox"
                            id="consentDataProcessing"
                            {...register('consentDataProcessing', { required: true })}
                          />
                          <p>I Consent to the Processing of my data</p>
                          {errors.consentDataProcessing && <p className="error">This field is required</p>}
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





