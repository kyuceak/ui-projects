import GeneralForm from './components/generalForm';
import EducationalExperienceForm from './components/educationalForm';
import PracticalExperienceForm from './components/practical';
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

       <GeneralForm />

        
          
            
       <PracticalExperienceForm workExperience={workExperience} setWorkExperience={setWorkExperience} />
          

        <EducationalExperienceForm/>
        
      </div>
      <div className="cv-preview"></div>
    </div>
  );
}

export default App;
