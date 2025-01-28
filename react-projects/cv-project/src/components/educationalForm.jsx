
import "../styles/educational-style.css"

import { useState } from "react"

function SchoolForm({id, removeSchoolForm}){


    return <>

        <div className="school-form">
        <div className="input-box">
        <label htmlFor="">School Name</label>
        <input type="text" />

        <label htmlFor="">Title of Study</label>
        <input type="text" />

        <label htmlFor="">Date of Study</label>
        <input type="date" />

        </div>

        <div className="delete">
            <button id="del-btn" onClick={() => {removeSchoolForm(id)}}>Delete</button>
        </div>

        </div>
       
  
    
    </>
}



function EducationalForm()
{   
    const [forms,setForms] = useState([]);


    const addSchoolForm = () => {
        setForms([...forms,{id: Date.now()}]);
    }

    const removeSchoolForm= (dateId) => {
        setForms(forms.filter((form) => form.id != dateId));
    }


    return( 
    <div className="school">

        <div className="school-forms">
        {
            forms.map( (form) => {
                return <SchoolForm key={form.id} id={form.id} removeSchoolForm={removeSchoolForm}/>
            }) 
        }
        </div>
       
    
       <button onClick={addSchoolForm} type="button">Add</button>

    </div>)
}

export default EducationalForm