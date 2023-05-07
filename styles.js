import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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

export const deleteButton = {
  ...button,
  backgroundColor: "#ff0000",
};

export const dropdownContainer = {
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
};

export const dropdown = {
  width: "30px",
  padding: "10px 8px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  backgroundColor: "#f2f2f2",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  display: "inline-block",
  verticalAlign: "middle",
  marginLeft: "-1px",
};

export const dropdownArrow = {
  position: "absolute",
  top: "50%",
  right: "10px",
  transform: "translateY(-50%) rotate(90deg)",
  width: "0",
  height: "0",
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderTop: "5px solid #000",
};
