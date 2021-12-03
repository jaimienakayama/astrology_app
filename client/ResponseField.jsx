import React from "react";
import Button from "./Button.jsx";

const ResponseField = ({ sign, handleOnClick }) => {
  return (
    <>
      <div className="response-header">
        <h3>{sign}</h3>
        <div className="response-field"></div>
      </div>
      <Button text="back" handleOnClick={handleOnClick} />
    </>
  );
};

export default ResponseField;
