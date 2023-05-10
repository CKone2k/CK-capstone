import { dropdownStyles } from "../styles";

const Dropdown = ({ options, selectedOption, onOptionChange }) => {
  return (
    <select
      style={{ ...dropdownStyles, display: "block" }}
      value={selectedOption}
      onChange={(e) => onOptionChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
