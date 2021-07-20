import React, { useState } from "react";
import "./App.css";
import Input from "./Containers/Input";
import Display from "./Containers/Display";

const App = () => {
  const [step, setStep] = useState(0);
  const [selectedValue, setSelectedValue] = useState();
  return (
    <div className="calculation-container">
      <div className="calculation-content-box">
        <div className="calculation-content">
          <div className="calculation-inner-content">
            {step === 0 ? (
              <Input onSubmit={setStep} selected={setSelectedValue} />
            ) : (
              <Display selectedValue={selectedValue} onSubmit={setStep} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
