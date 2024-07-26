import React from "react";
import "./register.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userRegister, setEmail } from "../../../Redux/Slices/UserSlice";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const role = useSelector((state) => state.user.role) ;
  console.log("Selected Role:", role);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {

      console.log("Submitting Data:", {
        name: data.name,
        email: data.email,
        password: data.password,
        role, // Ensure this is correctly passed
      });
      
      const response = await dispatch(
        userRegister({
          name: data.name,
          email: data.email,
          password: data.password,
          role,
        })
      );

      if (!response.error) {
        dispatch(setEmail(data.email));
        
        navigate("/otpVerify", { state: { email: data.email } });
      } else {
        console.error("Registration error:", response.error);
        navigate("/register");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
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
          <div className="col-md-5 register_form">
            <div className="form_for_register">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="heading_section">
                  <h3>Register</h3>
                </div>
                <div className="Body_section">
                  <div className="form_input">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control inputs"
                      autoComplete="off"
                      {...register("name", {
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: "Invalid name format",
                        },
                        required: "Name is required",
                      })}
                    />
                    <p className="error">{errors.name?.message}</p>
                    
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control inputs"
                      autoComplete="off"
                      {...register("email", {
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: "Invalid email format",
                        },
                        required: "Email is required",
                      })}
                    />
                    <p className="error">{errors.email?.message}</p>
                    
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control inputs"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <p className="error">{errors.password?.message}</p>
                    
                    {error && <p className="error">{error}</p>}
                  </div>
                  <div className="form_btn">
                    <button type="submit" className="register_btn">Register</button>
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
  );
};

export default Register;
