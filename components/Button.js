import styled from "styled-components";
import { buttonStyles } from "@/styles";

const Button = ({ children, onClick, type, style }) => {
  return (
    <StyledButton onClick={onClick} type={type} style={style}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${buttonStyles}
`;

export default Button;
