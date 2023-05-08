import React from "react";
import PropTypes from "prop-types";
import { buttonStyle } from "@/styles";

const Button = ({ children, onClick, style, type }) => {
  return (
    <button style={{ ...buttonStyle, ...style }} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  onClick: null,
  style: {},
  type: "button",
};

export default Button;
