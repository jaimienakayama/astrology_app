import React from "react";

const Button = ({ text, handleOnClick }) => {
  return (
    <button className={`${text}-button`} onClick={handleOnClick}>
      {text}
    </button>
  );
};

export default Button;
