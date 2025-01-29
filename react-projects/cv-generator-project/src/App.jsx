import GeneralForm from './components/generalForm';
import EducationalExperienceForm from './components/educationalForm';
import PracticalExperienceForm from './components/practical';
import "./App.css";
import { useState } from "react";
import CVPreview from './components/cvPreview';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
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
          

        <EducationalExperienceForm educations={education} setEducation={setEducation}/>
        
      </div>
      <div className="cv-preview">
        <CVPreview generalInfo={generalInfo} educations={education} workExperience={workExperience}/>
      </div>
    </div>
  );
}

export default App;
