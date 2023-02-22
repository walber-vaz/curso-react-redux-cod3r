import React, { useState } from "react";
import Button from "../Button";
import Display from "../Display";

import "./style.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  function cleanMemory() {
    setDisplayValue(0);
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  function setOperationFunc(operation) {
    console.log(operation);
  }

  function addDigit(n) {
    if (n === "." && displayValue.includes(".")) {
      return;
    }

    const clearDisplayValue = displayValue === 0 || clearDisplay;
    const currentValue = clearDisplayValue ? "" : displayValue;
    const displayValueUpdated = currentValue + n;
    setDisplayValue(displayValueUpdated);
    setClearDisplay(false);

    if (n !== ".") {
      const newValue = parseFloat(displayValueUpdated);
      const valuesUpdated = [...values];
      valuesUpdated[current] = newValue;
      setValues(valuesUpdated);
      console.log(valuesUpdated);
    }
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button label="AC" click={cleanMemory} triple />
      <Button label="/" click={setOperationFunc} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperationFunc} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperationFunc} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperationFunc} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperationFunc} operation />
    </div>
  );
}

export default Calculator;
