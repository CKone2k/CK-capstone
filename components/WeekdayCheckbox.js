import { useState } from "react";
import {
  weekdayCheckboxStyles,
  weekdayCheckboxLabelStyles,
  weekdayCheckboxBoxStyles,
} from "../styles";

const WeekdayCheckbox = ({ onChange }) => {
  const [weekdays, setWeekdays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const handleCheckboxChange = (event) => {
    const weekday = event.target.name;
    const isChecked = event.target.checked;
    setWeekdays((prevState) => ({
      ...prevState,
      [weekday]: isChecked,
    }));
    onChange(weekdays);
  };

  return (
    <div style={weekdayCheckboxStyles}>
      {Object.keys(weekdays).map((weekday) => (
        <div
          key={weekday}
          style={weekdayCheckboxBoxStyles(weekdays[weekday])}
          onClick={() =>
            handleCheckboxChange({
              target: { name: weekday, checked: !weekdays[weekday] },
            })
          }
        >
          <label htmlFor={weekday} style={weekdayCheckboxLabelStyles}>
            {weekday}
          </label>
        </div>
      ))}
    </div>
  );
};

export default WeekdayCheckbox;
