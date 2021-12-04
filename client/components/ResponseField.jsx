import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { Container, Header } from "../styles/GlobalStyles.js";
import {
  DetailsStyled,
  DailyMessageStyled,
  DescriptionStyled,
  SectionStyled,
  ResponseStyled,
  TitleStyled,
} from "../styles/ResponseFieldStyles.js";

const ResponseField = ({ sign, toggleView, horoscope, reset }) => {
  const [dateRange, setDateRange] = useState("");
  const [color, setColor] = useState("");
  const [compatibility, setCompatibility] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [description, setDescription] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [luckyTime, setLuckyTime] = useState("");
  const [mood, setMood] = useState("");

  useEffect(() => {
    if (horoscope) {
      setDateRange(horoscope.date_range);
      setColor(horoscope.color);
      setCompatibility(horoscope.compatibility);
      setCurrentDate(horoscope.current_date);
      setDescription(horoscope.description);
      setLuckyNumber(horoscope.lucky_number);
      setLuckyTime(horoscope.lucky_time);
      setMood(horoscope.mood);
    }
  }, [horoscope]);

  const handleOnClick = () => {
    reset();
    toggleView();
  };

  return (
    <Container>
      <Header>✨ {sign} ✨</Header>
      <Container>
        <div>Current date: {currentDate}</div>
        <div>Date range: {dateRange}</div>
        <DailyMessageStyled>
          <TitleStyled>Daily horoscope:</TitleStyled>
          <DescriptionStyled>{description}</DescriptionStyled>
        </DailyMessageStyled>
        <DetailsStyled>
          <SectionStyled>
            <TitleStyled>Compatibility:</TitleStyled>
            <ResponseStyled>{compatibility}</ResponseStyled>
          </SectionStyled>
          <SectionStyled>
            <TitleStyled>Color:</TitleStyled>
            <ResponseStyled>{color}</ResponseStyled>
          </SectionStyled>
          <SectionStyled>
            <TitleStyled>Lucky number:</TitleStyled>
            <ResponseStyled>{luckyNumber}</ResponseStyled>
          </SectionStyled>
          <SectionStyled>
            <TitleStyled>Lucky time:</TitleStyled>
            <ResponseStyled>{luckyTime}</ResponseStyled>
          </SectionStyled>
          <SectionStyled>
            <TitleStyled>Mood:</TitleStyled>
            <ResponseStyled>{mood}</ResponseStyled>
          </SectionStyled>
        </DetailsStyled>
      </Container>
      <Button text="Back" handleOnClick={handleOnClick} />
    </Container>
  );
};

export default ResponseField;
