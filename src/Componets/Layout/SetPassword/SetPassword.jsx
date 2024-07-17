import React from "react";
import "./setPassword.css";

const SetPassword = () => {
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
            <div className="col-md-5 login_form">
              <div className="form_for_login">
                <div className="heading_section heading">
                  <h3>Set New Password</h3>
                </div>
                <form action="">
                <div className="body_section">
                  <div className="center_content">
                    <div className="form_input">
                      
                      <label htmlFor="setPassword">Enter The New Password</label>
                      <input
                        id="setPassword"
                        type="text"
                        className="form-control inputs"
                      />
                       <label htmlFor="confirmPassword"> Confirm Password</label>
                      <input
                        id="confirmPassword"
                        type="text"
                        className="form-control inputs"
                      />
                    </div>
                    <div className="submit_btn">
                        <a href="/login"><button className="btn_submit">Submit</button></a>
                    </div>
                   
                  </div>
                 
                </div>
                </form>
                <div className="footer_section footer">
                <div className="content_section">
                    <p>Don't have an account?</p>
                  </div>
                  <div className="bottomRegister_btn">
                    <a href="/register">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background"></div>
        <div className="overlay"></div>
      </div>
    </>
  );
};

export default SetPassword;
