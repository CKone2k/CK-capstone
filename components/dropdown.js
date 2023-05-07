import React, { useState } from "react";
import styles from "./dropdownstyles.module.css";

const Dropdown = ({ label, options, selectedOption, onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onOptionChange(option);
    toggleDropdown();
  };

  return (
    <div>
      <label>{label}</label>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdownCategory} onClick={toggleDropdown}>
          {selectedOption}
        </div>
        <div className={styles.dropdownArrow} onClick={toggleDropdown}>
          <span
            className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
          ></span>
        </div>
        {isOpen && (
          <div className={styles.dropdownOptions}>
            {options.map((option) => (
              <div
                key={option}
                className={`${styles.dropdownOption} ${
                  option === selectedOption ? styles.selected : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
