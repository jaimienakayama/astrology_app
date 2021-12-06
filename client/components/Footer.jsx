import React, { useState } from "react";
import axios from "axios";
import Button from "./Button.jsx";
import { SubscribeInput } from "../styles/GlobalStyles.js";
import { FooterStyled, SubscribeResponse } from "../styles/FooterStyles.js";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [subscribeClicked, setSubscribeClicked] = useState(false);

  const handleOnChange = (e) => setEmail(e.target.value);

  const isEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ? true
      : false;
  };

  const handleOnClick = (email) => {
    const validEmail = isEmail(email);
    setSubscribeClicked(!subscribeClicked);
    if (validEmail) {
      axios
        .post("/subscribe", { data: email })
        .then((r) => {
          setResponse(r.data);
          setEmail("");
        })
        .catch((err) => {
          setResponse("Oops! Something went wrong :(");
          setTimeout(() => {
            setSubscribeClicked(false);
            setEmail("");
          }, 2000);
        });
    } else {
      setResponse("Please enter a valid email address!");
      setTimeout(() => {
        setSubscribeClicked(false);
        setEmail("");
      }, 2000);
    }
  };

  return (
    <>
      {!subscribeClicked ? (
        <FooterStyled>
          <SubscribeInput
            type="email"
            onChange={handleOnChange}
            value={email}
            placeholder="Enter email"
          ></SubscribeInput>
          <Button
            text="Subscribe"
            handleOnClick={() => {
              handleOnClick(email);
            }}
          />
        </FooterStyled>
      ) : (
        <FooterStyled>
          <SubscribeResponse>{response}</SubscribeResponse>
        </FooterStyled>
      )}
    </>
  );
};
export default Footer;
