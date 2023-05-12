import { textFieldStyles } from "@/styles";

const TextField = ({ label, value, onChange }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={textFieldStyles}
      />
    </div>
  );
};

export default TextField;
