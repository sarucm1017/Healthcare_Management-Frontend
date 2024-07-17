import React from "react";
import "./register.css";
import  doctorImage from "./doctorsoption.png";
import patientImage from "./patientOption.png";

const Register = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="fullcontainer">
          <div className="Logo">
            <div className="icon">
              <i class="fa-solid fa-hand-holding-medical"></i>
            </div>
            <div className="logoName">MedicalCare</div>
          </div>
          <div className="col-md-12 commoncontainer">
            <div className="col-md-5 register_form">
              <div className="form_for_register">
               <form action="">
               <div className="heading_section">
                  <h3>Register</h3>
                </div>
                <div className="Body_section">
                  <div className="form_input">
                    <label htmlFor="inputForms"> Name</label>
                    <input
                      id="inputForms"
                      type="text"
                      className="form-control inputs"
                    />
                    <label htmlFor="email"> Email</label>
                    <input
                      id="email"
                      type="text"
                      className="form-control inputs"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="text"
                      className="form-control inputs"
                    />
                  </div>
                  <div className="form_btn">
                    <a href=""><button className="register_btn">Register</button></a>
                  </div>
                </div>
               </form>
                  <div className="form_btn">
                  <a href=""><button className="google_oauth">
                      <i class="fa-brands fa-google"></i>Sign up with Google
                    </button></a>
                  </div>
                
                <div className="footer_section">
                  <div className="content_section">
                    <p>Already have an account?</p>
                  </div>
                  <div className="sign_btn">
                    <a href="/login">Sign in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background"></div>
        <div className="overlay"></div>
      </div>

     <div className="popup_container">
      <div className="popup">
        <div className="options">
          <div className="header_section">
            <p>To proceed with your registration
            please select your role</p>
          </div>
          <div className="center-section">
            <div className="optionFordoctor">
              <div><a href=""><img src={doctorImage} alt="" /> </a></div>
              <div><p>Doctor</p></div>
            </div>
            <div className="optionForpatient">
              <div><a href=""></a><img src={patientImage} alt="" /></div>
              <div><p>Patient</p></div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Register;
