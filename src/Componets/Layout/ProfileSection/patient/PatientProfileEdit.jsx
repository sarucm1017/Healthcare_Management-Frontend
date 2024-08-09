import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientById, updatePatient } from "../../../../Redux/Slices/PatientSlice";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";
import "./patientProfile.css";
import defaultimage from "./defaultimage.jpg";

const PatientProfileEdit = () => {
    const dispatch = useDispatch();
    const { data: patientData } = useSelector((state) => state.patient);
    const [formData, setFormData] = useState({
        age: "",
        address: "",
        emergency_contact: "",
        city: "",
        state: "",
        country: "",
        medical_history: "",
        current_medications: "",
        allergies: "",
        chronic_conditions: "",
        health_insurance_provider: "",
        health_insurance_policy_number: "",
    });

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            dispatch(fetchPatientById(userId));
        }
    }, [dispatch]);

    useEffect(() => {
        if (patientData) {
            setFormData({
                age: patientData.age || "",
                address: patientData.address || "",
                emergency_contact: patientData.emergency_contact || "",
                city: patientData.city || "",
                state: patientData.state || "",
                country: patientData.country || "",
                medical_history: patientData.medical_history || "",
                current_medications: patientData.current_medications || "",
                allergies: patientData.allergies || "",
                chronic_conditions: patientData.chronic_conditions || "",
                health_insurance_provider: patientData.health_insurance_provider || "",
                health_insurance_policy_number: patientData.health_insurance_policy_number || "",
            });
        }
    }, [patientData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        console.log("Updating user with ID:", userId);
        if (userId) {
            dispatch(updatePatient({ userId, ...formData }));
        }
    };

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
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                    <div className="title_part">
                                        <h4>Profile</h4>
                                    </div>
                                </div>
                                <div className="right_section"></div>
                            </div>
                            <div className="main_section">
                                <div className="col-md-12 profilefullSection">
                                    
                                    <form onSubmit={handleSubmit}>

                                    <div className="profileHeader">
                                        <div className="profileimage-navbarSection col-md-6">
                                            <div className="profileImage_box">
                                                <img src={defaultimage} alt="Default Profile" />
                                            </div>
                                            <div className="profile_name"><p>{patientData ? patientData.userName : "Amal"}</p></div>
                                        </div>
                                        <div className="btn_foredit col-md-6">
                                            <button onClick={handleSubmit}>Save Changes</button>
                                        </div>
                                    </div>
                                        <div className="profileBottom">
                                            <div className="col-md-5 body_content-section">
                                                <div className="profile-heading"><h5>Contact Informations</h5></div>
                                                <div className="profile_maininput">
                                                    <p>Age</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="age"
                                                            value={formData.age}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>Address</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            value={formData.address}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>Emergency Contact Number</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="emergency_contact"
                                                            value={formData.emergency_contact}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>City</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>State</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="state"
                                                            value={formData.state}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>Country</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            value={formData.country}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5 body_content-section">
                                                <div className="profile-heading"><h5>Medical Informations</h5></div>
                                                <div className="profile_maininput">
                                                    <p>Medical History</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="medical_history"
                                                            value={formData.medical_history}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>Current Medications</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="current_medications"
                                                            value={formData.current_medications}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>Allergies</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="allergies"
                                                            value={formData.allergies}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>Chronic Conditions</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="chronic_conditions"
                                                            value={formData.chronic_conditions}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>Health Insurance Provider</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="health_insurance_provider"
                                                            value={formData.health_insurance_provider}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="profile_maininput">
                                                    <p>Health Insurance Policy Number</p>
                                                    <div className="profile_inputBox">
                                                        <input
                                                            type="text"
                                                            name="health_insurance_policy_number"
                                                            value={formData.health_insurance_policy_number}
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

export default PatientProfileEdit;
