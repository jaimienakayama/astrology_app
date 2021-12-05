import React, { useState } from "react";
import axios from "axios";
import Button from "./Button.jsx";
import { InputStyled } from "../styles/GlobalStyles.js";
import { FooterStyled } from "../styles/FooterStyles.js";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  const handleOnChange = (e) => setEmail(e.target.value);

  const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ? true
      : false;
  };

  const handleOnClick = (email) => {
    const validEmail = validateEmail(email);
    if (validEmail) {
      axios
        .post("/subscribe", { data: email })
        .then((r) => {
          setResponse(r.data);
          setEmail("");
        })
        .catch((err) => setResponse("Oops! Something went wrong :("));
    } else {
      setResponse("Please enter a valid email address!");
    }
  };
  return (
    <FooterStyled>
      Please subscibe to our newsletter!
      <InputStyled
        type="email"
        onChange={handleOnChange}
        value={email}
      ></InputStyled>
      <Button
        text="Subscribe"
        handleOnClick={() => {
          handleOnClick(email);
        }}
      />
      {response}
    </FooterStyled>
  );
};
export default Footer;
