import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    backgroundColor: "#f2f2f2",
    margin: 0;
    font-family: Helvetica;
  }
`;
export const containerStyles = {
  maxWidth: "375px",
  margin: "40px auto",
  marginTop: "80px",
  padding: "20px",
  minHeight: "calc(100vh - 130px)",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "100px",
  marginBottom: "80px",
};

export const textFieldStyles = {
  margin: "0 auto 10px",
  width: "calc(100% - 45px)",
  padding: "8px 6px",
  fontSize: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "center",
  marginLeft: "10px",
  marginRight: "10px",
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
  textAlign: "center",
};

export const dropdownStyles = {
  margin: "10px auto",
  padding: "6px",
  fontSize: "12px",
  borderRadius: "4px",
  border: "none",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  color: "#333",
  width: "100%",
  maxWidth: "200px",
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
  padding: "5px",
  display: "flex",
  backgroundColor: "#e6e6e6",
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
  backgroundColor: "#e6e6e6",
  padding: "3px",
  marginBottom: "3px",
  textAlign: "center",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
};

export const menuBarStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#e6e6e6",
  padding: "20px",
  position: "fixed",
  marginBottom: "50px",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "1",
};

export const menuButtonStyles = {
  backgroundColor: "transparent",
  border: "none",
  padding: "10px",
  margin: "16px",
  cursor: "pointer",
  fontSize: "18px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  flex: 1,
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
export const timeRangeStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "10px",
  marginBottom: "12px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  fontSize: "12px",
  width: "100%",
  maxWidth: "500px",
  marginTop: "20px",
};

export const timeRangeButtonStyles = {
  backgroundColor: "transparent",
  border: "none",
  padding: "8px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#333",
  marginRight: "10px",
  display: "inline-block",
};

export const timeRangeSelectedStyles = {
  backgroundColor: "#ff3333",
  color: "#fff",
  borderRadius: "4px",
  padding: "8px",
};
export const weekdayCheckboxStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "10px",
  marginBottom: "12px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  fontSize: "12px",
  width: "100%",
  maxWidth: "500px",
  marginTop: "20px",
};

export const weekdayCheckboxLabelStyles = {
  margin: 0,
};

export const weekdayCheckboxBoxStyles = (checked) => ({
  width: "70px",
  height: "70px",
  borderRadius: "4px",
  margin: "8px",
  backgroundColor: checked ? "#ff3333" : "#f3f3f3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});
