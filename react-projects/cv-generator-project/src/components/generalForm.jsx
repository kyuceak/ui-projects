


function GeneralForm({generalInfo, setGeneralInfo})
{


    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log(name,value)
        setGeneralInfo({...generalInfo,[name]:value})
    }
    return<>
    <div className="personal-container">
    <h2>Personal Information</h2>
    <form action="" className="personal-form">
      <div className="input-box">
        <label htmlFor="">Full Name:</label>
        <input type="text" name="fullName" onChange={handleChange} />
      </div>
      <div className="input-box">
        <label htmlFor="">Phone Number:</label>
        <input type="tel" name="phone" onChange={handleChange}/>
      </div>
      <div className="input-box">
        <label htmlFor="">Github Profile:</label>
        <input type="text" name="github" onChange={handleChange} />
      </div>
      <div className="input-box">
        <label htmlFor="">LinkedIn Profile:</label>
        <input type="text" name="linkedin" onChange={handleChange} />
      </div>
      <div className="input-box">
        <label htmlFor="">Email Adress:</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
    </form>
  </div>
  </>
}

export default GeneralForm