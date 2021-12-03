import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";

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
      setLuckyTime(horoscope.luckyTime);
      setMood(horoscope.mood);
    }
  }, [horoscope]);

  const handleOnClick = () => {
    reset();
    toggleView();
  };

  return (
    <>
      <div className="response-header">
        <h3>{sign}</h3>
        <div className="response-field">
          Current date: {currentDate}
          Date range: {dateRange}
          Compatibility: {compatibility}
          Color: {color}
          Lucky number: {luckyNumber}
          Lucky time: {luckyTime}
          Mood: {mood}
          Daily horoscope: {description}
        </div>
      </div>
      <Button text="back" handleOnClick={handleOnClick} />
    </>
  );
};

export default ResponseField;
