import React from "react";
import PatientsdashboardSidesection from "../../Dashborad/Patients/PatientsdashboardSidesection";
import "./patientMessage.css";
import defaultImage from "./defaultimage.jpg"

const PatientMessage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 full_container">
          <PatientsdashboardSidesection />
          <div className="col-md-10">
            <div className="main_home">
              <div className="nav_bar_section">
                <div className="left_section">
                  <div className="icon_part">
                    <i class="fa-solid fa-message"></i>
                  </div>
                  <div className="title_part">
                    <h4>Message</h4>
                  </div>
                </div>
                <div className="right_section"></div>
              </div>
              <div className="main_section">
              <div className="col-md-12 messageSection_main">
                  <div className="col-md-4 chating_peopele">
                    <div className="head_searchSection">
                      <input type="text" />
                    </div>
                    <div className="chatSection">
                        <div className="eachChat-people">
                           <div className="profile_dp">
                           <div className="Dp_image"> <img src= {defaultImage} /></div>
                           <div><p>Dr.Ariya</p></div>
                           </div>
                            <div><p>11</p></div>
                        </div>
                        <div className="eachChat-people">
                        <div className="profile_dp">
                           <div className="Dp_image"> <img src= {defaultImage} /></div>
                           <div><p>Dr.Ariya</p></div>
                           </div>
                            <div><p>11</p></div>
                        </div>
                        <div className="eachChat-people">
                        <div className="profile_dp">
                           <div className="Dp_image"> <img src= {defaultImage} /></div>
                           <div><p>Dr.Ariya</p></div>
                           </div>
                            <div><p>11</p></div>
                        </div>
                        <div className="eachChat-people">
                        <div className="profile_dp">
                           <div className="Dp_image"> <img src= {defaultImage} /></div>
                           <div><p>Dr.Ariya</p></div>
                           </div>
                            <div><p>11</p></div>
                        </div>
                        
                    </div>
                  </div>
                  <div className="col-md-7 chatingSection">
                    <div className="chat_headerSection">
                      <div className="img_section">
                        <img src= {defaultImage} alt="" />
                      </div>
                      <div className="name-Section">
                        <h6>Dr.Arya</h6>
                        <p>online</p>
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientMessage;
