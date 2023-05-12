import { useState } from "react";
import TextField from "./TextField";
import TextArea from "./TextArea";
import ToggleButton from "./ToggleButton";
import Button from "./Button";
import { containerStyles, GlobalStyle } from "@/styles";

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
  };

  return (
    <div style={containerStyles}>
      <h1>Profile</h1>

      <TextField label="Name" value={name} onChange={handleNameChange} />
      <TextArea placeholder="Bio" value={bio} onChange={handleBioChange} />
      <ToggleButton
        privateText="Private Profile"
        publicText="Public Profile"
        onClick={handleToggleClick}
      />
      <Button type="submit">Save Profile</Button>
    </div>
  );
};

export default ProfilePage;
