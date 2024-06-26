import React from "react";

function Button({ className, text }) {
  return (
    <input
      type="submit"
      className={className}
      value={text}
      disabled={false}
    />


  );
}

export default Button;