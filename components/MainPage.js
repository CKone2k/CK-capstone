import styled from "styled-components";

const StyledParagraph = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
  border: 7px solid #ff3333;
  border-radius: 13px;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to goal tracker!</h1>
      <StyledParagraph>
        This app is designed to help you achieve your goals.
        <br />
        The best way to do so is to split your goals into smaller activities so
        that you don't get overwhelmed.
        <br />
        You can set up a time schedule when you would like to be reminded.
        <br />
        It only takes a few minutes a day to get closer to your goal.
      </StyledParagraph>
    </div>
  );
};

export default MainPage;
