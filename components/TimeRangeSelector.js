import { useState } from "react";
import {
  timeRangeStyles,
  timeRangeButtonStyles,
  timeRangeSelectedStyles,
} from "../styles";

const TimeRangeSelector = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeRangeClick = (event) => {
    const selectedTimeRange = event.target.textContent;
    setSelectedTime(selectedTimeRange);
    onChange(selectedTimeRange);
  };

  return (
    <div style={timeRangeStyles}>
      <button
        style={
          selectedTime === "Morning"
            ? { ...timeRangeButtonStyles, ...timeRangeSelectedStyles }
            : timeRangeButtonStyles
        }
        onClick={handleTimeRangeClick}
      >
        Morning
      </button>
      <button
        style={
          selectedTime === "Afternoon"
            ? { ...timeRangeButtonStyles, ...timeRangeSelectedStyles }
            : timeRangeButtonStyles
        }
        onClick={handleTimeRangeClick}
      >
        Afternoon
      </button>
      <button
        style={
          selectedTime === "Evening"
            ? { ...timeRangeButtonStyles, ...timeRangeSelectedStyles }
            : timeRangeButtonStyles
        }
        onClick={handleTimeRangeClick}
      >
        Evening
      </button>
    </div>
  );
};

export default TimeRangeSelector;
