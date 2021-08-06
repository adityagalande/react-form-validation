import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouch] = useState(false);

  //   here value is not empty then true else false
  const valueIsValid = validateValue(enteredValue); //true
  const hasError = !valueIsValid && isTouched; //True True

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouch(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouch(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
