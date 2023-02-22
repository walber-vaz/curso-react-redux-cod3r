import React, { memo, useCallback, useMemo, useState } from "react";
import Button from "../Button";
import Display from "../Display";

import "./style.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  useMemo(() => {
    const displayValueUpdated = displayValue.toString();
    const lastDigit = displayValueUpdated[displayValueUpdated.length - 1];
    if (lastDigit === ".") {
      setDisplayValue(parseFloat(displayValueUpdated));
    }
  }, [displayValue]);

  const cleanMemory = useCallback(() => {
    setDisplayValue(0);
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }, []);

  const setOperationFunc = useCallback(
    (op) => {
      if (current === 0) {
        setOperation(op);
        setCurrent(1);
        setClearDisplay(true);
      } else {
        const equals = op === "=";
        const currentOperation = operation;
        const valuesUpdated = [...values];

        try {
          // valuesUpdated[0] = eval(
          //   `${valuesUpdated[0]} ${currentOperation} ${valuesUpdated[1]}`
          // );
          switch (currentOperation) {
            case "+":
              valuesUpdated[0] = valuesUpdated[0] + valuesUpdated[1];
              break;
            case "-":
              valuesUpdated[0] = valuesUpdated[0] - valuesUpdated[1];
              break;
            case "*":
              valuesUpdated[0] = valuesUpdated[0] * valuesUpdated[1];
              break;
            case "/":
              valuesUpdated[0] = valuesUpdated[0] / valuesUpdated[1];
              break;
            default:
              break;
          }
        } catch (e) {
          valuesUpdated[0] = values[0];
        }

        valuesUpdated[1] = 0;
        setDisplayValue(valuesUpdated[0]);
        setOperation(equals ? null : op);
        setCurrent(equals ? 0 : 1);
        setClearDisplay(!equals);
        setValues(valuesUpdated);
      }
    },
    [current, operation, values]
  );

  const addDigit = useCallback(
    (n) => {
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
      }
    },
    [clearDisplay, current, displayValue, values]
  );

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

export default memo(Calculator);
