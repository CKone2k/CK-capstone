import React, { useState } from "react";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import ToggleButton from "../components/ToggleButton";
import Button from "../components/Button";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleToggleClick = () => {
    setIsPrivate(!isPrivate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submitting profile data to database
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={handleNameChange} />
        <TextArea placeholder="Bio" value={bio} onChange={handleBioChange} />
        <ToggleButton
          privateText="Private Profile"
          publicText="Public Profile"
          onClick={handleToggleClick}
        />
        <Button type="submit">Save Profile</Button>
      </form>
    </div>
  );
};

export default ProfilePage;
