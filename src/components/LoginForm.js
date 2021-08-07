import useCustom from "../hooks/useCustom";

const LoginForm = (props) => {
  const {
    value: userName,
    isValid: valueIsValid,
    isError: hasError,
    valueHandler: userHandler,
    blurHandler: blurValueHandler,
    reset,
  } = useCustom((value) => value.trim() !== "");

  let formIsvalid = false;
  if (valueIsValid) {
    formIsvalid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsvalid) {
      return;
    }
    console.log(userName);
    reset();
  };

  const condition = hasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={condition}>
        <label htmlFor="name">User ID</label>
        <input
          id="name"
          type="text"
          value={userName}
          onChange={userHandler}
          onBlur={blurValueHandler}
        />
        {hasError && <p>You got error!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
