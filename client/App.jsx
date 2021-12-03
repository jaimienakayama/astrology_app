import ReactDOM from "react-dom";
import React, { useState } from "react";
import SignField from "./components/SignField.jsx";
import ResponseField from "./components/ResponseField.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
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
    <>
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
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
