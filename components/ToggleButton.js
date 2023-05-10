import { useState } from "react";
import Button from "./Button";

const ToggleButton = ({ privateText, publicText }) => {
  const [isPrivate, setIsPrivate] = useState(true);

  const handleClick = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <Button onClick={handleClick}>
      {isPrivate ? privateText : publicText}
    </Button>
  );
};

export default ToggleButton;
