import { textFieldStyles } from "@/styles";

const TextField = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      style={textFieldStyles}
      placeholder={placeholder}
    />
  );
};

export default TextField;
