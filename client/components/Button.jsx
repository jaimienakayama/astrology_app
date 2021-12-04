import React from "react";
import ButtonStyled from "../styles/ButtonStyles";

const Button = ({ text, handleOnClick }) => {
  return (
    <ButtonStyled
      onClick={() => {
        handleOnClick();
      }}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
