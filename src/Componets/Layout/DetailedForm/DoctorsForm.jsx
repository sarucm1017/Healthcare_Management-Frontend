import React from "react";
import "./form.css";

const DoctorsForm = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="fullcontainer">
          <div className="main_container">
            <form action="">
              <div className="col-md-12 form_details_section_doctors">
                <div>
                  <div className="doctors_from_heading">
                    <h4>Professional Information</h4>
                  </div>
                  <div className="form-main_section">
                    <div className="col-md-6">
                      <div className="form_section">
                        <div className="form_Fileds">
                          <label htmlFor="Specialization">Specialization</label>
                          <input id="Specialization" type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Qualification">Qualification</label>
                          <input id="Qualification" type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Medical License Numbere">Medical License Number</label>
                          <input id="Medical License Number" type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Year of Experience">Year of Experience</label>
                          <input id="Year of Experience" type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Board Certification">Board Certification</label>
                          <input id="Board Certification" type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Currently Working Hospital Name">Currently Working Hospital Name</label>
                          <input id="Currently Working Hospital Name" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_section">
                        <div className="form_Fileds">
                          <label htmlFor="Work Place Contact Number ">Work Place Contact Number </label>
                          <input id="Work Place Contact Number " type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Consultation Hours">Consultation Hours</label>
                          <input id="Consultation Hours" type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Available days">Available days</label>
                          <input id="Available days" type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Resideny Program  ">Resideny Program  </label>
                          <input id="Resideny Program  " type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="Professional Membership">Professional Membership</label>
                          <input id="Professional Membership" type="text" />
                        </div>
                        <div className="form_Fileds">
                          <label htmlFor="work place  contact Number">work place  contact Number</label>
                          <input id="work place  contact Number" type="text" />
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

export default DoctorsForm;
