import * as React from "react";

const Button: React.FC<{ className: string, text: string }> = ({ className, text }) => {
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