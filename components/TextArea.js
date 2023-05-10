import React from "react";
import { textareaStyles } from "@/styles";

const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      style={textareaStyles}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
