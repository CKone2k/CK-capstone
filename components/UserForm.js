import React from "react";
import { userFormStyles } from "../styles";

const UserForm = ({ username, onUsernameChange, bio, onBioChange }) => {
  return (
    <div style={userFormStyles.profileContainer}>
      <label htmlFor="username" style={userFormStyles.label}>
        Username:
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={onUsernameChange}
        style={userFormStyles.input}
      />
      <br />
      <label htmlFor="bio" style={userFormStyles.label}>
        Bio:
      </label>
      <textarea
        id="bio"
        value={bio}
        onChange={onBioChange}
        style={userFormStyles.textarea}
      />
    </div>
  );
};

export default UserForm;
