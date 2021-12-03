import React, { useState } from "react";
import axios from "axios";
import Button from "./Button.jsx";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  const handleOnChange = (e) => setEmail(e.target.value);

  const handleOnClick = (email) => {
    axios
      .post("/subscribe", { data: email })
      .then((r) => setResponse("Thanks for subscribing!"))
      .catch((err) => setResponse("Oops! Something went wrong :("));
  };
  return (
    <>
      Please subscibe to our newsletter!
      <input type="email" onChange={handleOnChange}></input>
      <Button
        text="subscribe"
        handleOnClick={() => {
          handleOnClick(email);
        }}
      />
      {response}
    </>
  );
};
export default Footer;
