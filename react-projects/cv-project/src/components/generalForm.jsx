import "../styles/general-style.css";

function GeneralForm() {
  return (
    <>
      <div className="general">

        <div className="row-1">
        <div className="input-box">
          <label htmlFor="first-name">Name:</label>
          <input type="text" id="first-name" />
        </div>

        <div className="input-box">
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" />
        </div>
        </div>
       <div className="row-2">
       <div className="input-box">
          <label htmlFor="user-email">Email: </label>
          <input type="email" id="user-email" />
        </div>

        <div className="input-box">
          <label htmlFor="user-phone">Phone Number: </label>
          <input type="tel" id="user-phone" />
        </div>

       </div>

        


      </div>
    </>
  );
}

export default GeneralForm;
