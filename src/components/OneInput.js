import useInput from "../hooks/use-input";

const OneInput = (props) => {
  const {
    value: enterUser,
    isValid: enterUserIsValid,
    valueChangeHandler: userChangeHandler,
    inputBlurHandler: UserBlurHandler,
    reset: resetUserInput,
  } = useInput((value) => value.trim() !== "");

  return (
    <form>
      <div className="form-control">
        <label htmlFor="Uname">NAME</label>
        <input type="text" id="Uname" />
      </div>
      <div className="form-actions">
        <button>DONE</button>
      </div>
    </form>
  );
};

export default OneInput;
