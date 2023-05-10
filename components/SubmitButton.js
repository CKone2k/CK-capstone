import React from "react";
import Button from "./Button";
import { buttonContainerStyles, buttonStyles } from "@/styles";

const SubmitButton = ({ onClick }) => {
  return (
    <div style={buttonContainerStyles}>
      <Button style={buttonStyles} type="submit" onClick={onClick}>
        Add Your goal
      </Button>
    </div>
  );
};

export default SubmitButton;
