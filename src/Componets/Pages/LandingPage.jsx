import React from "react";
import "./LandingPage.css";
import image from "./images-doc.png";
import docimage from "./doctors.png";

const LandingPage = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="container-fluid">
          <div className="headerSection">
            <div className="Logo">
              <div className="icon">
                <i class="fa-solid fa-hand-holding-medical"></i>
              </div>
              <div className="logoName">MedicalCare</div>
            </div>
            <div className="RegisterSection">
              
                <a href="/register"><button className="registerBtn">Register</button></a>
             
            </div>
          </div>
          <div className="col-md-12 bodySection">
            <div className="col-md-6 textSection">
              <div className="mainContent">
                <h1 className="first_line">We Are Ready To </h1>
                <h1 className="second_line">Help your Health </h1>
                <h1 className="last_line">Problems</h1>
                <h1></h1>
              </div>
              <div className="subContent">
                <p>
                  In times like today, your health is very important,especially
                  since the number of COVID-19 cases is increasing day by day,
                  so we are ready to help you with your health consultation
                </p>
              </div>
              <div className="loginBtn">
                <a href="/login"><button className="login">Login</button></a>
              </div>
            </div>
            <div className="col-md-6 imageSection">
              <div className="outerimage">
                <img src={image} alt="Health Consultation" />
              </div>
              <div className="insideimage">
                <img src={docimage} alt="Health Consultation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
