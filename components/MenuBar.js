import React from "react";

const MenuBar = () => {
  const handleCreateClick = () => {};

  const handleMainClick = () => {};

  const handleProfileClick = () => {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        padding: "20px",
      }}
    >
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: "10px",
          marginRight: "40px",
          cursor: "pointer",
          fontSize: "18px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        onClick={handleCreateClick}
      >
        Create
      </button>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: "10px",
          marginRight: "40px",
          cursor: "pointer",
          fontSize: "18px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        onClick={handleMainClick}
      >
        Main
      </button>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          fontSize: "18px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        onClick={handleProfileClick}
      >
        Profile
      </button>
    </div>
  );
};

export default MenuBar;
