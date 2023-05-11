import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Helvetica;
  }
`;
export const containerStyles = {
  maxWidth: "350px",
  margin: "40px auto",
  padding: "20px",
  minHeight: "calc(150vh - 130px)",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "100px",
};

export const textFieldStyles = {
  margin: "0 auto 10px",
  width: "calc(100% - 25px)",
  padding: "8px 6px",
  fontSize: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  display: "inline-block",
  verticalAlign: "middle",
};

export const textareaStyles = {
  margin: "10px 0",
  width: "100%",
  height: "80px",
  padding: "6px",
  fontSize: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

export const dropdownStyles = {
  margin: "10px auto",
  padding: "6px",
  fontSize: "12px",
  borderRadius: "4px",
  border: "none",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  color: "#333",
  width: "100%",
  maxWidth: "300px",
};

export const buttonContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
};

export const buttonStyles = {
  padding: "6px 12px",
  backgroundColor: "#ff3333",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "150px",
  margin: "10px auto 0",
  display: "block",
  textAlign: "center",
  lineHeight: "1.5",
  textTransform: "uppercase",
};

export const footerStyles = {
  backgroundColor: "#f2f2f2",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "1",
};

export const headerStyles = {
  backgroundColor: "#f2f2f2",
  padding: "3px",
  marginBottom: "3px",
  textAlign: "center",
};
export const menuBarStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f2f2f2",
  padding: "20px",
  position: "fixed",
  marginBottom: "80px",
  bottom: "0",
  left: "0",
  right: "0",
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
  margin: "10px auto",
  display: "block",
  textAlign: "center",
  lineHeight: "1.5",
  textTransform: "uppercase",
};
