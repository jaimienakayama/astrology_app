import React from "react";
import axios from "axios";
import Button from "./Button.jsx";

const SignField = ({ setSign, toggleView, sign, setHoroscope }) => {
  const handleOnChange = (e) => {
    setSign(e.target.value.toUpperCase());
  };

  const handleOnClick = (sign) => {
    const s = sign.toLowerCase();
    axios.post("/horoscopes", { data: s }).then((r) => {
      setHoroscope(r.data);
      toggleView();
    });
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
      <Button
        text="submit"
        handleOnClick={() => {
          handleOnClick(sign);
        }}
      />
    </>
  );
};

export default SignField;
