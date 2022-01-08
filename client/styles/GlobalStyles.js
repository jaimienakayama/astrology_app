import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("https://wallpaperaccess.com/full/1198688.jpg");
    background-size: cover;
    height: 100vh;
    font-family: 'Trispace', sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 0px;
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
  background-color: rgba(255, 255, 255, 0);
  border-radius: 5px;
  text-align: center;
  margin: 10px;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-family: "Trispace", sans-serif;
`;

export const SubscribeInput = styled.input`
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
  margin: 10px;
  color: #ffffff;
  border: none;
  font-family: "Trispace", sans-serif;
`;
