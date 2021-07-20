import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [inputtedNumber, setInputtedNumber] = useState(0);
  const [error, setError] = useState(false);

  const enterNumber = (event) => {
    setInputtedNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputtedNumber > 0) {
      setError(false);
      props.selected(inputtedNumber);
      props.onSubmit(1);
    } else {
      setError(true);
      // alert("Not accept 0 Value", setError);
    }
  };

  return (
    <div className="calculation-form">
      <h1>Expression</h1>
      <h1>Evaluator</h1>
      <form onSubmit={submitHandler}>
        <div className="form-floating">
          <input
            type="text"
            className={`form-control ${error && "is-error"}`}
            inputMode="numeric"
            id="floatingInputGrid"
            value={inputtedNumber}
            onChange={enterNumber}
          />
          {error && <div className="error-explain">Please Enter Valid Number...</div>}
          <label htmlFor="floatingInputGrid">Please Enter A Number</label>
        </div>
        <div className="mt-2">
          <button type="submit" className="btn btn-lg custom-btn">
            Add Number
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
