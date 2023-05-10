import React from "react";
import MenuBar from "@/components/MenuBar";
import { footerStyles } from "@/styles";

const Footer = ({ menuBarHeight }) => (
  <footer style={{ ...footerStyles, paddingBottom: menuBarHeight }}>
    <MenuBar
      onCreateClick={() => console.log("Create clicked")}
      onMainClick={() => console.log("Main clicked")}
      onProfileClick={() => console.log("Profile clicked")}
    />
    <p>© {new Date().getFullYear()} Goal Tracker. All rights reserved.</p>
  </footer>
);

export default Footer;
