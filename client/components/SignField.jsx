import React from "react";
import axios from "axios";
import Button from "./Button.jsx";
import { SignFieldStyled, WelcomeHeader } from "../styles/SignFieldStyles.js";
import { Container, InputStyled } from "../styles/GlobalStyles.js";

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
    <Container>
      <WelcomeHeader>WELCOME</WelcomeHeader>
      <SignFieldStyled>
        Enter sign:
        <InputStyled type="text" onChange={(e) => handleOnChange(e)} />
      </SignFieldStyled>
      <Button
        text="Submit"
        handleOnClick={() => {
          handleOnClick(sign);
        }}
      />
    </Container>
  );
};

export default SignField;
