import { useState } from "react";
import CardForm from "./CardForm";
import Dropdown from "./dropdown";
import ToggleButton from "./ToggleButton";
import SubmitButton from "./SubmitButton";
import TimeRangeSelector from "./TimeRangeSelector";
import WeekdayCheckbox from "./WeekdayCheckbox";

const options = ["Personal Goals", "Work Goals", "Educational Goal"];

const CardCreator = () => {
  const [cards, setCards] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isPublic, setIsPublic] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const handleCreateCard = (cardData) => {
    setCards([...cards, cardData]);
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleToggle = () => {
    setIsPublic(!isPublic);
  };

  const handleTimeRangeChange = (startTime, endTime) => {
    setSelectedStartTime(startTime);
    setSelectedEndTime(endTime);
  };

  const handleWeekdayChange = (weekdays) => {
    // handle weekday change here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit here
  };

  return (
    <div>
      <CardForm onSubmit={handleCreateCard} />

      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />

      <ToggleButton
        privateText="Private"
        publicText="Public"
        onToggle={handleToggle}
      />

      <TimeRangeSelector onChange={handleTimeRangeChange} />

      <WeekdayCheckbox onChange={handleWeekdayChange} />

      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default CardCreator;
