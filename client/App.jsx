import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import SignField from "./SignField.jsx";
import ResponseField from "./ResponseField.jsx";

const App = () => {
  const [responseShown, setResponseShown] = useState(false);
  const [sign, setSign] = useState("");
  const [horoscope, setHoroscope] = useState("");
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

  const toggleView = () => {
    setResponseShown(!responseShown);
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
          dateRange={dateRange}
          color={color}
          compatibility={compatibility}
          currentDate={currentDate}
          description={description}
          luckyNumber={luckyNumber}
          luckyTime={luckyTime}
          mood={mood}
        />
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
