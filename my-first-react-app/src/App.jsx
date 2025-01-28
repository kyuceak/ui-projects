import  { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];


function Person() {
  const [person, setPerson] = useState({ age: 100 });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + " " + lastName;

  const handleFirstNameChange = (event) => {

    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {

    setLastName(event.target.value);
  }


  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
    <input value={firstName} onChange={handleFirstNameChange} />
    <input value={lastName} onChange={handleLastNameChange} />
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [counter,setCounter] = useState(0);

  const onButtonClick = (color,counter) => () => {
    setBackgroundColor(color);
    setCounter(++counter);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color,counter)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}

      <h1>{counter}</h1>
    </div>
  );
}

export  {App,Person};
