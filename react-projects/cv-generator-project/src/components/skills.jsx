


function SkillsForm({skills, setSkills})
{


    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log(name,value)
        setSkills({...skills,[name]:value})
    }
    return<>
    <div className="personal-container">
    <h2>Technical Skills</h2>
    <form action="" className="personal-form">
      <div className="input-box">
        <label htmlFor="">Languages:</label>
        <input type="text" name="languages" onChange={handleChange} />
      </div>
      <div className="input-box">
        <label htmlFor="">Frameworks:</label>
        <input type="text" name="frameworks" onChange={handleChange} />
      </div>
      <div className="input-box">
        <label htmlFor="">Developer Tools:</label>
        <input type="text" name="tools" onChange={handleChange} />
      </div>
      <div className="input-box">
        <label htmlFor="">Libraries:</label>
        <input type="text" name="libraries" onChange={handleChange} />
      </div>
    </form>
  </div>
  </>
}

export default SkillsForm