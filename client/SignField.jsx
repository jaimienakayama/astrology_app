import React from "react";
import Button from "./Button.jsx";

const SignField = ({ setSign, handleOnClick }) => {
  const handleOnChange = (e) => {
    setSign(e.target.value);
  };

  return (
    <>
      <div className="welcome">
        <h3>welcome</h3>
        <div className="sign-field">
          <label htmlFor="sign">Enter sign:</label>
          <input
            type="text"
            className="sign"
            required
            minLength="3"
            maxLength="15"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>
      <Button text="submit" handleOnClick={handleOnClick} />
    </>
  );
};

export default SignField;
