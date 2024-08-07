import React, { useEffect } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { submitPatientForm } from "../../../Redux/Slices/PatientSlice";

const PatientForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const { loading, error } = useSelector((state) => state.patient);
  const userId = useSelector((state) => state.user.userId);

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
      const response = await dispatch(submitPatientForm(payload));
      if (!response.error) {
  
        navigate("/patientsDashboard");
      } else {
        console.error("Error saving patient data:", response.error);
      }
    } catch (error) {
      console.error("Error saving patient data:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="fullcontainer">
        <div className="main_container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12 form_details_section">
              <div className="col-md-6">
                <div className="form_section">
                  <div className="form_heading">
                    <h4>Personal Details</h4>
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="address">Address</label>
                    <input
                      id="address"
                      type="text"
                      {...register("address", { required: true })}
                    />
                    {errors.address && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="emergency_contact">Emergency Contact</label>
                    <input
                      id="emergency_contact"
                      type="text"
                      {...register("emergency_contact", { required: true })}
                    />
                    {errors.qualification && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="age">Age</label>
                    <input
                      id="age"
                      type="text"
                      {...register("age", { required: true })}
                    />
                    {errors.age && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="city">City</label>
                    <input
                      id="city"
                      type="text"
                      {...register("city", { required: true })}
                    />
                    {errors.city && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="state">State</label>
                    <input
                      id="state"
                      type="text"
                      {...register("state", { required: true })}
                    />
                    {errors.state && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="country">Country</label>
                    <input
                      id="country"
                      type="text"
                      {...register("country", { required: true })}
                    />
                    {errors.country && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form_section">
                  <div className="form_heading">
                    <h4>Medical Information</h4>
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="medical_history">Medical History</label>
                    <input
                      id="medical_history"
                      type="text"
                      {...register("medical_history", { required: true })}
                    />
                    {errors.medical_history && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="current_medications">
                      Current Medications
                    </label>
                    <input
                      id="current_medications"
                      type="text"
                      {...register("current_medications", { required: true })}
                    />
                    {errors.current_medications && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="allergies">Allergies</label>
                    <input
                      id="allergies"
                      type="text"
                      {...register("allergies", { required: true })}
                    />
                    {errors.allergies && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="chronic_conditions">
                      Chronic Conditions
                    </label>
                    <input
                      id="chronic_conditions"
                      type="text"
                      {...register("chronic_conditions", { required: true })}
                    />
                    {errors.chronic_conditions && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="health_insurance_provider">
                      Health Insurance Provider
                    </label>
                    <input
                      id="health_insurance_provider"
                      type="text"
                      {...register("couhealth_insurance_providerntry", {
                        required: true,
                      })}
                    />
                    {errors.health_insurance_provider && (
                      <p className="error">This field is required</p>
                    )}
                  </div>
                  <div className="form_Fileds">
                    <label htmlFor="health_insurance_policy_number">
                      Health Insurance Policy Number
                    </label>
                    <input
                      id="health_insurance_policy_number"
                      type="text"
                      {...register("health_insurance_policy_number", {
                        required: true,
                      })}
                    />
                    {errors.health_insurance_policy_number && (
                      <p className="error">This field is required</p>
                    )}
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
                    <div className="from_submission">
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
  );
};

export default PatientForm;

// import React, { useState , useEffect} from "react";
// import "./form.css";
// import { useDispatch, useSelector } from "react-redux";
// import { submitPatientForm } from "../../../Redux/Slices/PatientSlice";
// import { useForm } from 'react-hook-form';
// import { useNavigate } from "react-router-dom";

// const PatientForm = () => {
//   const [formData, setFormData] = useState({
//     address: "",
//     emergency_contact: "",
//     age: "",
//     city: "",
//     state: "",
//     country: "",
//     medical_history: "",
//     current_medications: "",
//     allergies: "",
//     chronic_conditions: "",
//     health_insurance_provider: "",
//     health_insurance_policy_number: "",
//     agreeTerms: false,
//     consentDataProcessing: false,
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.patient);

//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [id]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.agreeTerms && formData.consentDataProcessing) {
//       dispatch(submitPatientForm(formData)).then((response) => {
//         if (!response.error) {
//           navigate("/patientsDashboard");
//         }
//       });
//     } else {
//       alert("Please agree to the terms and consent to data processing.");
//     }
//   };

//   return (
// <div className="container-fluid">
//   <div className="fullcontainer">
//     <div className="main_container">
//       <form onSubmit={handleSubmit}>
//         <div className="col-md-12 form_details_section">
//           <div className="col-md-6">
//             <div className="form_section">
//               <div className="form_heading">
//                 <h4>Personal Details</h4>
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="address">Address</label>
//                 <input
//                   id="address"
//                   type="text"
//                   value={formData.address}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="emergency_contact">Emergency Contact</label>
//                 <input
//                   id="emergency_contact"
//                   type="text"
//                   value={formData.emergency_contact}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="age">Age</label>
//                 <input
//                   id="age"
//                   type="text"
//                   value={formData.age}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="city">City</label>
//                 <input
//                   id="city"
//                   type="text"
//                   value={formData.city}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="state">State</label>
//                 <input
//                   id="state"
//                   type="text"
//                   value={formData.state}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="country">Country</label>
//                 <input
//                   id="country"
//                   type="text"
//                   value={formData.country}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="form_section">
//               <div className="form_heading">
//                 <h4>Medical Information</h4>
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="medical_history">Medical History</label>
//                 <input
//                   id="medical_history"
//                   type="text"
//                   value={formData.medical_history}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="current_medications">Current Medications</label>
//                 <input
//                   id="current_medications"
//                   type="text"
//                   value={formData.current_medications}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="allergies">Allergies</label>
//                 <input
//                   id="allergies"
//                   type="text"
//                   value={formData.allergies}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="chronic_conditions">Chronic Conditions</label>
//                 <input
//                   id="chronic_conditions"
//                   type="text"
//                   value={formData.chronic_conditions}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="health_insurance_provider">Health Insurance Provider</label>
//                 <input
//                   id="health_insurance_provider"
//                   type="text"
//                   value={formData.health_insurance_provider}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form_Fileds">
//                 <label htmlFor="health_insurance_policy_number">Health Insurance Policy Number</label>
//                 <input
//                   id="health_insurance_policy_number"
//                   type="text"
//                   value={formData.health_insurance_policy_number}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-12">
//           <div className="form_compliance">
//             <div>
//               <div className="legal_heading">
//                 <h4>Legal Compliance</h4>
//               </div>
//               <div className="legal_main">
//                 <div className="compliance_section">
//                   <input
//                     type="checkbox"
//                     id="agreeTerms"
//                     checked={formData.agreeTerms}
//                     onChange={handleChange}
//                   />
//                   <p>I Agree to the Terms and Conditions</p>
//                 </div>
//                 <div className="compliance_section">
//                   <input
//                     type="checkbox"
//                     id="consentDataProcessing"
//                     checked={formData.consentDataProcessing}
//                     onChange={handleChange}
//                   />
//                   <p>I Consent to the Processing of my data</p>
//                 </div>
//                 <div className="from_submission">
//                   <button type="submit" disabled={loading}>
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </div>
//                 {error && <p className="error">{error}</p>}
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
//   <div className="background"></div>
//   <div className="overlay"></div>
// </div>
//   );
// };

// export default PatientForm;
