import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { buttonStyles } from "@/styles";

const Button = ({ children, onClick, type, style }) => {
  return (
    <StyledButton onClick={onClick} type={type} style={style}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: null,
  type: "button",
  style: {},
};

const StyledButton = styled.button`
  ${buttonStyles}
`;

export default Button;
