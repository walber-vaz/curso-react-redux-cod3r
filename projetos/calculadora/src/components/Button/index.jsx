import React from "react";

import "./style.css";

function Button({ label }) {
  return (
    <button className="button" type="button">
      {label}
    </button>
  );
}

export default Button;
