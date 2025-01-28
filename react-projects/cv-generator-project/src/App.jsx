// import GeneralForm from './components/generalForm';
// import EducationalForm from './components/educationalForm';
// import PracticalExperienceForm from './components/practical';
// import CVPreview from './components/CVPreview';
import "./App.css";
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  return (
    <div className="app">
      <div className="sidebar">
        <div className="header-sidebar">
          <h1>Resume Generator</h1>
          <button type="button" id="reset-btn">
            Reset
          </button>
        </div>

        <div className="personal-container">
          <h2>Personal Information</h2>
          <form action="" className="personal-form">
            <div className="input-box">
              <label htmlFor="">Full Name:</label>
              <input type="text" />
            </div>
            <div className="input-box">
              <label htmlFor="">Phone Number:</label>
              <input type="tel" />
            </div>
            <div className="input-box">
              <label htmlFor="">Github Profile:</label>
              <input type="text" />
            </div>
            <div className="input-box">
              <label htmlFor="">LinkedIn Profile</label>
              <input type="text" name="" id="" />
            </div>
            <div className="input-box">
              <label htmlFor="">Email Adress:</label>
              <input type="text" />
            </div>
          </form>
        </div>

        <div className="education-container">
          <h2>Work Experience</h2>

          <button>
            <svg
              viewBox="0 -0.5 21 21"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#197bb8"
              stroke="#197bb8"
            id="pls-btn">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>plus_circle [#197bb81441]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-419.000000, -520.000000)"
                    fill="#197bb8"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M374.55,369 L377.7,369 L377.7,371 L374.55,371 L374.55,374 L372.45,374 L372.45,371 L369.3,371 L369.3,369 L372.45,369 L372.45,366 L374.55,366 L374.55,369 Z M373.5,378 C368.86845,378 365.1,374.411 365.1,370 C365.1,365.589 368.86845,362 373.5,362 C378.13155,362 381.9,365.589 381.9,370 C381.9,374.411 378.13155,378 373.5,378 L373.5,378 Z M373.5,360 C367.70085,360 363,364.477 363,370 C363,375.523 367.70085,380 373.5,380 C379.29915,380 384,375.523 384,370 C384,364.477 379.29915,360 373.5,360 L373.5,360 Z"
                        id="plus_circle-[#197bb81441]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Experience
          </button>
        </div>

        <h2>Education</h2>
      </div>
      <div className="cv-preview"></div>
    </div>
  );
}

export default App;
