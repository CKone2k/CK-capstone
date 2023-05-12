import { useState } from "react";
import ToggleButton from "./ToggleButton";
import Button from "./Button";
import UserForm from "./UserForm";

const ProfilePage = ({ containerStyles }) => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };
  const handleToggleClick = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <div style={containerStyles}>
      <h1>Profile</h1>
      <UserForm
        username={username}
        onUsernameChange={handleUsernameChange}
        bio={bio}
        onBioChange={handleBioChange}
        containerStyles={containerStyles}
      />

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
