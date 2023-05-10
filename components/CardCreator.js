import { useState } from "react";
import CardForm from "./CardForm";
import Button from "./Button";
import Dropdown from "./dropdown";
import ToggleButton from "./ToggleButton";

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

  return (
    <div>
      <CardForm onSubmit={handleCreateCard} buttonComponent={Button} />
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <ToggleButton privateText="Private" publicText="Public" />

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
