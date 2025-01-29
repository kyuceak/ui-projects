import GeneralForm from './components/generalForm';
import EducationalExperienceForm from './components/educationalForm';
import PracticalExperienceForm from './components/practical';
import "./App.css";
import { useState } from "react";
import CVPreview from './components/cvPreview';
import ProjectExperienceForm from './components/projects';
import SkillsForm from './components/skills';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [skills, setSkills] = useState({
    languages: "",
    frameworks: "",
    tools: "",
    libraries: ""
  });

  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [resetTrigger, setResetTrigger] = useState(false);
  const resetData = () => {
    setResetTrigger((prev) => !prev); 
    setGeneralInfo({
      fullName: "",
      email: "",
      phone: "",
      github: "",
      linkedin:""
    });
    setSkills({ languages: "",
      frameworks: "",
      tools: "",
      libraries: ""});
    setEducation([]);
    setWorkExperience([]);
    setProjects([]);
  }


  return (
    <div className="app">
      <div className="sidebar">
        <div className="header-sidebar">
          <h1>Resume Generator</h1>
          <button type="button" id="reset-btn" onClick={resetData}>
            Reset
          </button>
        </div>

       <GeneralForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}  />

        
          
            
       <PracticalExperienceForm workExperience={workExperience} setWorkExperience={setWorkExperience} resetTrigger={resetTrigger}/>
          

        <EducationalExperienceForm educations={education} setEducation={setEducation} resetTrigger={resetTrigger}/>
        <ProjectExperienceForm projects={projects} setProjects={setProjects} resetTrigger={resetTrigger}/>
        <SkillsForm skills={skills} setSkills={setSkills} />
        
      </div>
      <div className="cv-preview">
        <CVPreview 
        generalInfo={generalInfo} 
        educations={education} 
        workExperience={workExperience} 
        projects={projects} 
        skills={skills}/>
      </div>
    </div>
  );
}

export default App;
