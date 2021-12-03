import React from "react";
import Button from "./Button.jsx";

const ResponseField = ({
  sign,
  toggleView,
  dateRange,
  color,
  compatibility,
  currentDate,
  description,
  luckyNumber,
  luckyTime,
  mood,
}) => {
  const handleOnClick = () => {
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
      <Button text="back" handleOnClick={toggleView} />
    </>
  );
};

export default ResponseField;
