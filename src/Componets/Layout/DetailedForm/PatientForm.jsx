import React from "react";
import "./form.css";

const PatientForm = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="fullcontainer">
          <div className="main_container">
            <form action="">
              <div className="col-md-12 form_details_section">
                <div className="col-md-6">
                  <div className="form_section">
                    <div className="form_heading">
                      <h4>Personal Details</h4>
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="address">Address</label>
                      <input id="address" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="emergency_contact">Emergency</label>
                      <input id="emergency_contact" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="age">Age</label>
                      <input id="age" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="city">City</label>
                      <input id="city" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="state">State</label>
                      <input id="state" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="country">Country</label>
                      <input id="country" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form_section">
                    <div className="form_heading">
                      <h4>Medical Informations</h4>
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="Medical History">Medical History</label>
                      <input id="Medical History" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="Current Medications">Current Medications</label>
                      <input id="Current Medications" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="Allergies">Allergies</label>
                      <input id="Allergies" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="Chronic Conditions">Chronic Conditions</label>
                      <input id="Chronic Conditions" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="Health Insurance Prrovider">Health Insurance Prrovider</label>
                      <input id="Health Insurance Prrovider" type="text" />
                    </div>
                    <div className="form_Fileds">
                      <label htmlFor="Health Insurance Ploice Number">Health Insurance Ploice Number</label>
                      <input id="Health Insurance Ploice Number" type="text" />
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
                            id="checkbox"
                            name="checkbox"
                            value="checkbox"
                          />
                          <p>I Agree to the Terms and Conditions</p>
                        </div>
                        <div className="compliance_section">
                          <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            value="checkbox"
                          />
                          <p>I Consent to the Processing of my data</p>
                        </div>
                      </div>
                      <div className="from_submission">
                        <button>Submit</button>
                      </div>
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

export default PatientForm;
