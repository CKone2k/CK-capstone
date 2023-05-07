import React, { useState } from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import {
  container,
  textField,
  textarea,
  buttonContainer,
  button,
  deleteButton,
  dropdownContainer,
  dropdown,
  dropdownArrow,
} from "@/styles";

const options = ["Sports goals", "Work goals", "Education goals"];

const Form = () => {
  const [name, setName] = useState([]);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [message, setMessage] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  const [numFields, setNumFields] = useState(1);

  const handleNameChange = (event, index) => {
    const newName = [...name];
    newName[index] = event.target.value;
    setName(newName);
  };

  const handleMessageChange = (event, index) => {
    const newMessage = [...message];
    newMessage[index] = event.target.value;
    setMessage(newMessage);
  };

  const handleOptionChange = (option) => setSelectedOption(option);
  const handleToggle = () => setIsPublic(!isPublic);
  const handleDelete = () => setMessage([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Names:", name);
    console.log("Selected Option:", selectedOption);
    console.log("Messages:", message);
  };

  const dropdownStyle = {
    ...dropdown,
  };

  const handleAddField = () => {
    setNumFields(numFields + 1);
    setName([...name, ""]);
    setMessage([...message, ""]);
  };

  const renderFields = () => {
    const fields = [];
    for (let i = 0; i < numFields; i++) {
      fields.push(
        <React.Fragment key={i}>
          <TextField
            label={`My Goal ${i + 1}`}
            value={name[i]}
            onChange={(event) => handleNameChange(event, i)}
            style={{ ...textField, flex: 1, marginRight: "10px" }}
          />
          <textarea
            style={textarea}
            placeholder={`How do you want to achieve your goal ${i + 1}...`}
            value={message[i]}
            onChange={(event) => handleMessageChange(event, i)}
          />
        </React.Fragment>
      );
    }
    return fields;
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit}>
        <h2>Create your goal</h2>
        {renderFields()}
        <div style={buttonContainer}>
          <Button style={deleteButton} onClick={handleDelete}>
            Delete Message
          </Button>
          <Button style={button} onClick={handleToggle}>
            {isPublic ? "Public" : "Privacy"}
          </Button>
        </div>
        <Button style={button} type="submit">
          Submit
        </Button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button style={button} onClick={handleAddField}>
            Add Another Field
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
