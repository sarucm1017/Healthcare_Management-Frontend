import React from "react";
import "./otpVerify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userOtp } from "../../../Redux/Slices/UserSlice";

const OtpVerify = () => {
  const { otpForUser, handleSubmit , formState : {errors},} = useForm();
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    
    try {
       const response = await dispatch(userOtp(data));
       if (!response.error) {
        navigate("/login");
      } else {
        navigate("/otpVerify");
      }

    } catch (error) {
      console.error("Error fetching user info", error);
    }


  }
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
            <div className="col-md-5 form_for_login">
              <div className="login_form">
                <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="heading_section heading">
                  <h3>OTP</h3>
                </div>
                <div className="body_section">
                  <div className="center_content">
                    <div className="form_input">
                      <label htmlFor="Otp"> Enter OTP</label>
                      <input
                        id="Otp"
                        type="text"
                        className="form-control inputs"
                        {...otpForUser("otp", {
                          required: "otp is required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="Verify_btn">
                    <a href=""><button  className="btn_Verify">Verify</button></a>
                  </div>
                </div>
                </form>
                
                
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

export default OtpVerify;
