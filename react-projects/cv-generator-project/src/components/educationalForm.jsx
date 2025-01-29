
import { useState } from "react"
import "../styles/educational-style.css"




function EducationalForm({
    education,
    updateEducationalExperience,
    removeEducationExperience,
    setEditingId
})
{
    const [formData, setFormData] = useState(education);

    const handleChange = (e) => {
        const {name, value} = e.target;
        const updatedFormData = {...formData,[name]:value};
        setFormData(updatedFormData);
        updateEducationalExperience(updatedFormData);
    }

    const handleSave = (e) => {
        e.preventDefault();
        
        setEditingId(null);
    }


    return (
        <form action="" className="practical-form" onSubmit={handleSave}>
          <div className="input-box">
            <label htmlFor="">College Name:</label>
            <input
              type=""
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Degree:</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
              <label htmlFor="">GPA:</label>
              <input 
              type="number"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}/>
          </div>
          <div className="input-box">
            <label htmlFor="">Coursework:</label>
            <textarea
              name="courseWork"
              id=""
              value={formData.mainWork}
              onChange={handleChange}
            ></textarea>
    
    
            <div className="input-box">
                <label htmlFor="">Start Date:</label>
                <input 
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange} />
            </div>
    
            <div className="input-box">
                <label htmlFor="">End Date:</label>
                <input 
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange} />
            </div>
          </div>
    
          <div className="actions">
            <button
              onClick={() => {
                setEditingId(null);
                return removeEducationExperience(education.id);
              }}
              id="del-btn"
            >
              <span>
              <svg
              width="35"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#c4abab"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
              </span>
            </button>
            <button id="save-btn" >
              Save
            </button>
            
          </div>
        </form>
      );
}


function EducationalExperienceForm({educations,setEducation})
{
    const [editingId, setEditingId] = useState(null);

    const addEducationExperience = () => {
        const newEducation = {
            id: Date.now(),
            collegeName: "",
            degree: "",
            gpa: 0,
            courseWork: "",
            startDate: "",
            endDate: ""
        };
        setEducation([...educations,newEducation])
        setEditingId(newEducation.id);
    }

    const updateEducationalExperience = (updatedEducation) => {
        setEducation(
          educations.map((education) => {
            return education.id === updatedEducation.id ? updatedEducation : education;
          })
        );
      };


      const removeEducationExperience = (id) => {
        setEducation(educations.filter((education) => education.id != id));
      };
    

    return (
        <div className="my-container">
            <h2>Education</h2>

            <div className="education-forms">
                {
                    educations.map((education) => 
                    editingId === education.id ? (
                        <EducationalForm
                        key={education.id}
                        education={education}
                        updateEducationalExperience={updateEducationalExperience}
                        removeEducationExperience={removeEducationExperience}
                        setEditingId={setEditingId}
                        />
                    ) : (

                        editingId !== null ? null :
                        <div 
                        key={education.id}
                        className="work-summary"
                        onClick={() => setEditingId(education.id)}
                        >
                            <p>
                                <strong>{education.collegeName}</strong>
                            </p>
                        </div>
                    ))
                }
            </div>
            
                {
                    editingId !== null ? null : <button className="pls-btn" onClick={addEducationExperience}>
                    <svg
                      viewBox="0 -0.5 21 21"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#197bb8"
                      stroke="#197bb8"
                      id="pls-btn"
                    >
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
                    <span className="pls-text">Education</span>
                  </button>
                }
           
        </div>
    )
}


export default EducationalExperienceForm