import React, { useState } from "react";

const SimpleInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouch] = useState(false);

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
    // console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouch(true);
    if (userInput.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log(userInput);
    setUserInput("");
  };

  const nameInputIsInvalid = !isValid && enteredNameTouched;
  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={userInputHandler}
          value={userInput}
        />
        {nameInputIsInvalid && <p className="error-text">Invalid input</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
