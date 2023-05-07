import React from "react";
import MenuBar from "@/components/MenuBar";

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

export default Footer;
