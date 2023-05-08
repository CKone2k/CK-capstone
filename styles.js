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

export const container = {
  maxWidth: "500px",
  margin: "40px auto",
  padding: "30px",
  minHeight: "calc(150vh - 130px)",
  overflowY: "auto",
};

export const textField = {
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
  marginLeft: "10px",
};

export const textarea = {
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

export const buttonContainer = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
};

export const button = {
  padding: "8px 16px",
  backgroundColor: "#ff3333",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  flex: "1",
  marginRight: "8px",
};

export const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  marginRight: "10px",
  cursor: "pointer",
};

export const footer = {
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
};

export const main = {
  paddingBottom: "80px", // adjust this value as needed
};

export const deleteButton = {
  backgroundColor: "red",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  marginRight: "10px",
  cursor: "pointer",
};
