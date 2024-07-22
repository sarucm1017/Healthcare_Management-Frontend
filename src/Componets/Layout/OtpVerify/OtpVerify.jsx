import React, { useEffect } from "react";
import "./otpVerify.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { verifyOtp } from "../../../Redux/Slices/UserSlice";

const OtpVerify = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const error = useSelector((state) => state.user.error);
  const role = useSelector((state) => state.user.role); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (email) {
      setValue("email", email);
    }
  }, [email, setValue]);

  const onSubmit = async (data) => {
   
    try {
      const response = await dispatch(verifyOtp({
        email: data.email,
        otp: data.otp,
      }));
     
      if (!response.error) {
        navigate("/popup");
      } else {
       navigate("/otpVerify")
       
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
    }
  };

  return (
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
            <div className="login_form">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="heading_section heading">
                  <h3>OTP</h3>
                </div>
                <div className="body_section">
                  <div className="center_content">
                    <div className="form_input">
                      <label htmlFor="Otp">Enter OTP</label>
                      <input type="hidden" {...register("email", { required: true })} />
                      <input
                        id="Otp"
                        type="text"
                        className="form-control inputs"
                        {...register("otp", {
                          required: {
                            value: true,
                            message: "Otp is required",
                        }
                        })}
                      />
                      <p className="error">{errors.otp?.message}</p>
                      {error && <p className="error">{error}</p>}
                    </div>
                  </div>
                  <div className="Verify_btn">
                    <button type="submit" className="btn_Verify">Verify</button>
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
  );
};

export default OtpVerify;

