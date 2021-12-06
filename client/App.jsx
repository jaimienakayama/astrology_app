import ReactDOM from "react-dom";
import React, { useState } from "react";
import Footer from "./components/Footer.jsx";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import TextField from "./components/TextField.jsx";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TextField />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
