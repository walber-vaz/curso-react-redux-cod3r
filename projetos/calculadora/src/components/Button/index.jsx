import React from "react";

import "./style.css";

function Button({ label, operation, double, triple, click }) {
  return (
    <button
      className={`
      button
      ${operation ? "operation" : ""}
      ${double ? "double" : ""}
      ${triple ? "triple" : ""}
    `}
      type="button"
      onClick={() => click && click(label)}
    >
      {label}
    </button>
  );
}

export default Button;
