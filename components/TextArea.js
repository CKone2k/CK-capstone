import React from "react";

const TextArea = ({ placeholder, value, onChange, style }) => {
  return (
    <textarea
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
