import "../styles/practical-style.css";

import { useState } from "react";

function PracticalForm({ id, removeForm }) {
  return (
    <>
      <div className="school-form">
        <div className="input-box">

         <div className="row">
         <label htmlFor="company-name">Company Name:</label>
         <input type="text" id="company-name" />
         </div>
          

          <div className="row">
            <label htmlFor="position-title">Position title:</label>
            <input type="text" id="position-title" />
          </div>

          <div className="row">
            <label htmlFor="">Describe your main work:</label>
            <textarea name="" id=""></textarea>
          </div>
        </div>

        <div className="delete">
          <button
            id="del-btn"
            onClick={() =>  removeForm(id)
            }
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

function PracticalExperienceForm() {
  const [forms, setForms] = useState([]);

  const addPracticalForm = () => {
    setForms([...forms, { id: Date.now() }]);
  };

  const removePracticalForm = (id) => {
    setForms(forms.filter((form) => form.id != id));
  };

  return (
    <div className="practical">
      <div className="practical-forms">
        {forms.map((form) => {
          return (
            <PracticalForm
              key={form.id}
              id={form.id}
              removeForm={removePracticalForm}
            />
          );
        })}
      </div>

      <button onClick={addPracticalForm} type="button">
        Add
      </button>
    </div>
  );
}

export default PracticalExperienceForm;
