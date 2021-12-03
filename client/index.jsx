import ReactDOM from "react-dom";
import React, { useState } from "react";
import SignField from "./SignField.jsx";
import ResponseField from "./ResponseField.jsx";

const App = () => {
  const [responseShown, setResponseShown] = useState(false);
  const [sign, setSign] = useState("");

  const toggleView = () => {
    setResponseShown(!responseShown);
  };

  return (
    <>
      {!responseShown ? (
        <SignField setSign={setSign} handleOnClick={toggleView} />
      ) : (
        <ResponseField sign={sign} handleOnClick={toggleView} />
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
