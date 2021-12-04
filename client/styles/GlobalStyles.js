import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #b49bd4;
    height: 90vh;
    font-family: "Quicksand", sans-serif;
    color: #766191;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
`;

export const InputStyled = styled.input`
  border-radius: 10px;
  border-width: 0px;
  text-align: center;
  margin: 10px;
  opacity: 0.5;
`;

export const Header = styled.div`
  font-size: 48pt;
  font-weight: bold;
  padding: 10px;
`;
