import { useState } from 'react'
import GeneralForm from './components/generalForm'
import './App.css'
import EducationalForm from './components/educationalForm'

function App() {
 

  return (
    <>

    <div className="container">

      <form action="">
        <h1>Personal Information</h1>
       <GeneralForm />
       <br />
       <h1>Education</h1>
       <EducationalForm/>
       <br />
       <h1>Work Experience</h1>
      </form>
    </div>
      
    </>
  )
}

export default App
