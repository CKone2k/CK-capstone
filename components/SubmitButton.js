import React from "react";
import Button from "./Button";
import { button } from "@/styles";

const SubmitButton = ({ onClick }) => {
  return (
    <Button style={button} type="submit" onClick={onClick}>
      Add Your goal
    </Button>
  );
};

export default SubmitButton;
