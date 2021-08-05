import React, { useState } from "react";

const SimpleInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
    // console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userInput.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log(userInput);
    setUserInput("");
  };

  const nameInputClass = isValid ? "form-control" : "form-control invalid";

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
        {!isValid && <p className="error-text">Invalid input</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
