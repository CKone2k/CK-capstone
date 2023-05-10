import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
export const containerStyles = {
  maxWidth: "500px",
  margin: "40px auto",
  padding: "30px",
  minHeight: "calc(150vh - 130px)",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const textFieldStyles = {
  margin: "0 auto 10px",
  width: "calc(100% - 35px)",
  padding: "10px 8px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginBottom: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  display: "inline-block",
  verticalAlign: "middle",
};

export const textareaStyles = {
  margin: "10px 0",
  width: "100%",
  height: "100px",
  padding: "8px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginBottom: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

export const dropdownStyles = {
  margin: "0 auto 16px",
  padding: "8px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

export const buttonContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
};

export const buttonStyles = {
  padding: "8px 16px",
  backgroundColor: "#ff3333",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "200px",
  margin: "0 auto",
  display: "block",
  textAlign: "center",
  lineHeight: "1.5",
  textTransform: "uppercase",
};

export const footerStyles = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: "60px",
  backgroundColor: "#ccc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 20px",
  zIndex: -1,
};

export const mainStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  paddingBottom: "100px",
};

export const headerStyles = {
  backgroundColor: "#f2f2f2",
  padding: "5px",
  marginBottom: "5px",
  textAlign: "center",
};
export const menuBarStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f2f2f2",
  padding: "20px",
  position: "fixed",
  bottom: "60px",
  zIndex: "1",
};

export const menuButtonStyles = {
  backgroundColor: "transparent",
  border: "none",
  padding: "10px",
  marginRight: "40px",
  cursor: "pointer",
  fontSize: "18px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

export const newButtonStyles = {
  padding: "8px 16px",
  backgroundColor: "#ff3333",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "200px",
  margin: "10px",
  display: "block",
  textAlign: "center",
  lineHeight: "1.5",
  textTransform: "uppercase",
};
