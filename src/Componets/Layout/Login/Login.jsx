import React from "react";
// import "./register.css";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="fullcontainer">
          <div className="Logo">
            <div className="icon">
              <i className="fa-solid fa-hand-holding-medical"></i>
            </div>
            <div className="logoName">MedicalCare</div>
          </div>
          <div className="col-md-12 commoncontainer">
            <div className="col-md-5 form_for_login">
              <form action="">
                <div className=" login_form">
                  <div className="heading_section heading">
                    <h3>Login</h3>
                  </div>
                  <div className="body_section">
                    <div className="center_content">
                      <div className="form_input">
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
                      <div className="forgotPassword">
                        <a href="/setpassword">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="form_btn">
                      <a href="">
                        <button className="login_btn">Login</button>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <div className="form_btn">
                <a href="">
                  <button className="google_oauth">
                    <i className="fa-brands fa-google"></i>Sign up with Google
                  </button>
                </a>
              </div>
              <div className="footer_section">
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
        <div className="background"></div>
        <div className="overlay"></div>
      </div>
    </>
  );
};

export default Login;
