import { useReducer, useState } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const reducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      touched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      touched: action.isTouched,
    };
  }
  if (action.type === "RESET") {
    return { value: "", touched: false };
  }
  return reducer;
};

const useCustom = (validation) => {
  const [inputState, dispatch] = useReducer(reducer, initialState);

  //   const [value, setValue] = useState("");
  //   const [touched, setTouched] = useState(false);

  const valuevalid = validation(inputState.value);
  const hasError = inputState.touched && !valuevalid;

  const valueHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valuevalid,
    isError: hasError,
    valueHandler,
    blurHandler,
    reset,
  };
};

export default useCustom;
