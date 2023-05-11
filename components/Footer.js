import { footerStyles } from "@/styles";

const Footer = () => (
  <footer style={footerStyles}>
    <p>© {new Date().getFullYear()} Goal Tracker. All rights reserved.</p>
  </footer>
);

export default Footer;
