import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameResetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameResetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetInput,
  } = useInput((value) => value.includes("@gmail.com"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
    if (!formIsValid) {
      return;
    }
    //  else if (!lastNameIsValid) {
    //   return;
    // }
    console.log(firstName + "\n" + lastName + "\n" + email);
    firstNameResetInput();
    lastNameResetInput();
    emailResetInput();
  };

  const condition = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const conditionLname = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const conditionEmail = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={condition}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
        </div>
        <div className={conditionLname}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
        </div>
      </div>
      <div className={conditionEmail}>
        <label htmlFor="name">E-mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {(firstNameInputHasError ||
          lastNameInputHasError ||
          emailInputHasError) && (
          <p className="error-text">Enter text folks!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
