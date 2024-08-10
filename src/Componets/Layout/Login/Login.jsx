import React, { useEffect } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userlogin, setUserData } from "../../../Redux/Slices/UserSlice";
import { setUserdata } from "../../../Redux/Slices/PatientSlice";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

   // Directly use useSelector in the component
   const userIdFromUserSlice = useSelector((state) => state.user.userId);
   const userIdFromPatientSlice = useSelector((state) => state.patient.userId);
   const userId = userIdFromUserSlice || userIdFromPatientSlice;
 
   const role = useSelector((state) => state.user.role);
   const error = useSelector((state) => state.user.error);

  console.log("User ID:", userId);

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(userlogin({
        email: data.email,
        password: data.password,
      }));

      if (response.meta.requestStatus === 'fulfilled') {
        const { role, token, userId, data: userData } = response.payload;

        // Dispatch setUserData actions
        dispatch(setUserData({ userData, userId, token, role }));
        dispatch(setUserdata({ userData, userId, token, role }));

        // Navigate based on role
        if (role === 'patient') {
          navigate(`/patientsDashboard/${userId}`);
        } else if (role === 'doctor') {
          navigate(`/doctorsDashboard/${userId}`);
        }
      } else {
        console.error("Login failed:", response.payload);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    console.log('Role in useEffect:', role);
    console.log('User ID in useEffect:', userId);
    if (role === 'patient') {
      navigate(`/patientsDashboard/${userId}`);
    } else if (role === 'doctor') {
      navigate(`/doctorsDashboard/${userId}`);
    }
  }, [role, userId, navigate]);

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login_form">
                <div className="heading_section heading">
                  <h3>Login</h3>
                </div>
                <div className="body_section">
                  <div className="center_content">
                    <div className="form_input">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="text"
                        className="form-control inputs"
                        {...register("email", { required: "Email is required" })}
                      />
                      <p>{errors.email?.message}</p>
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control inputs"
                        {...register("password", { required: "Password is required" })}
                      />
                      <p>{errors.password?.message}</p>
                      {error && <p>{error}</p>}
                    </div>
                    <div className="forgotPassword">
                      <a href="/setpassword">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="form_btn">
                    <button className="login_btn" type="submit">Login</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="form_btn">
              <button className="google_oauth">
                <i className="fa-brands fa-google"></i> Sign up with Google
              </button>
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

export default Login;
