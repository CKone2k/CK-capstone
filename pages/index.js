import React, { useState } from "react";
import TextField from "@/components/TextField";
import Dropdown from "@/components/dropdown";
import MenuBar from "@/components/MenuBar";
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

const Header = () => (
  <header
    style={{ backgroundColor: "#f2f2f2", padding: "5px", marginBottom: "5px" }}
  >
    <h1 style={{ textAlign: "center" }}>Goal Tracker</h1>
  </header>
);

const Footer = () => (
  <footer
    style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      backgroundColor: "#f2f2f2",
      padding: "5px",
      textAlign: "center",
    }}
  >
    <MenuBar
      onCreateClick={() => console.log("Create clicked")}
      onMainClick={() => console.log("Main clicked")}
      onProfileClick={() => console.log("Profile clicked")}
    />
    <p>© 2023 Goal Tracker. All rights reserved.</p>
  </footer>
);

const IndexPage = () => {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [message, setMessage] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);
  const handleOptionChange = (option) => setSelectedOption(option);
  const handleToggle = () => setIsPublic(!isPublic);
  const handleDelete = () => setMessage("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Selected Option:", selectedOption);
    console.log("Message:", message);
  };

  const dropdownStyle = {
    ...dropdown,
  };

  return (
    <div>
      <Header />
      <div style={container}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              label="My Goal"
              value={name}
              onChange={handleNameChange}
              style={{ ...textField, flex: 1, marginRight: "10px" }}
            />
            <div style={dropdownContainer}>
              <Dropdown
                style={dropdownStyle}
                label="Categories : "
                options={options}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
              />
              <div style={dropdownArrow} />
            </div>
          </div>
          <textarea
            style={textarea}
            placeholder="How do you want to achieve your goal..."
            value={message}
            onChange={handleMessageChange}
          />
          <div style={buttonContainer}>
            <button style={deleteButton} onClick={handleDelete}>
              Delete Message
            </button>
            <button style={button} onClick={handleToggle}>
              {isPublic ? "Public" : "Privacy"}
            </button>
          </div>
          <button style={button} type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
