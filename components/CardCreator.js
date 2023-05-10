import { useState } from "react";
import CardForm from "./CardForm";
import Dropdown from "./dropdown";
import ToggleButton from "./ToggleButton";
import SubmitButton from "./SubmitButton";

const options = ["Personal Goals", "Work Goals", "Educational Goal"];

const CardCreator = () => {
  const [cards, setCards] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isPublic, setIsPublic] = useState(false);

  const handleCreateCard = (cardData) => {
    setCards([...cards, cardData]);
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleToggle = () => {
    setIsPublic(!isPublic);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submitting data to database
  };

  return (
    <div>
      <CardForm onSubmit={handleCreateCard} />
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <ToggleButton privateText="Private" publicText="Public" />

      <SubmitButton onClick={handleSubmit} />

      {cards.map((card, index) => (
        <div key={index}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardCreator;
