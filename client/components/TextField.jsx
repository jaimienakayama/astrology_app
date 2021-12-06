import React, { useState } from "react";
import { TextFieldStyled } from "../styles/TextFieldStyles";
import SignField from "./SignField.jsx";
import ResponseField from "./ResponseField.jsx";

const TextField = () => {
  const [responseShown, setResponseShown] = useState(false);
  const [sign, setSign] = useState("");
  const [horoscope, setHoroscope] = useState("");

  const toggleView = () => {
    setResponseShown(!responseShown);
  };

  const reset = () => {
    setSign("");
    setHoroscope("");
  };

  return (
    <TextFieldStyled>
      {!responseShown ? (
        <SignField
          setSign={setSign}
          toggleView={toggleView}
          setHoroscope={setHoroscope}
          sign={sign}
        />
      ) : (
        <ResponseField
          sign={sign}
          toggleView={toggleView}
          horoscope={horoscope}
          reset={reset}
        />
      )}
    </TextFieldStyled>
  );
};

export default TextField;
