import React, { useState, useEffect } from "react";
import "./Display.css";

const Display = (props) => {
  const [selectedOpraterValue, setSelectedOpraterValue] = useState("+");
  const [finalResult, setFinalResult] = useState("");
  const staticValue = 4;

  const calculation = () => {
    let result = "";
    if (selectedOpraterValue === "+") {
      result = Number(props.selectedValue) + Number(staticValue);
    } else if (selectedOpraterValue === "-") {
      result = props.selectedValue - staticValue;
    } else if (selectedOpraterValue === "*") {
      result = props.selectedValue * staticValue;
    } else if (selectedOpraterValue === "/") {
      result = props.selectedValue / staticValue;
    }
    setFinalResult(result);
  };

  useEffect(() => {
    calculation();
  }, [selectedOpraterValue]);

  const selectHandler = (event) => {
    setSelectedOpraterValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(0);
  };

  return (
    <div className="calculator">
      <div>
        <div>
          <span
            style={{
              borderRadius: 2,
              fontSize: 20,
              display: "inline-block",
              width: 70,
              height: 70,
              backgroundColor: "whitesmoke",
              padding: 20,
            }}
          >
            {props.selectedValue}
          </span>
          <span
            style={{
              borderRadius: 2,
              marginLeft: 20,
              fontSize: 20,
              display: "inline-block",
              width: 70,
              height: 70,
              backgroundColor: "whitesmoke",
              padding: 20,
            }}
          >
            {staticValue}
          </span>
          <span
            style={{
              borderRadius: 2,
              marginLeft: 20,
              fontSize: 20,
              display: "inline-block",
              width: 70,
              height: 70,
              backgroundColor: "whitesmoke",
              padding: 20,
            }}
          >
            {selectedOpraterValue}
          </span>
        </div>
        <div style={{ fontSize: 60, fontWeight: "lighter" }}>=</div>
        <span style={{ color: "#08ffe6", fontSize: 50 }}>{finalResult}</span>
      </div>
      <div className="row g-3">
        <form onSubmit={submitHandler} style={{ marginTop: "35px" }}>
          <div className="display-content">
            <div className="col-sm-7 form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                value={selectedOpraterValue}
                onChange={selectHandler}
              >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
              </select>
              <label htmlFor="floatingSelect">Operator</label>
            </div>
            <div className="col-sm form-floating">
              <div className="form-control" id="floatingInputGrid">
                {props.selectedValue.length}
              </div>
              <label htmlFor="floatingSelect">Operand</label>
            </div>
          </div>
          <div className="col-sm">
            <button type="submit" className="btn btn-lg custom-btn">
              Add Opration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Display;
