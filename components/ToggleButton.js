import React, { useState } from "react";

const ToggleButton = ({ onPublic, onPrivate }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
    if (isToggled) {
      onPrivate();
    } else {
      onPublic();
    }
  };

  return (
    <button onClick={handleClick}>{isToggled ? "Public" : "Private"}</button>
  );
};

export default ToggleButton;
