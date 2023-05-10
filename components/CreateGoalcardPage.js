import React from "react";
import styled from "styled-components";
import CardCreator from "./CardCreator";

const Heading = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  ${(props) => props.theme.container}
`;

const CreateGoalcardPage = () => {
  return (
    <Container>
      <Heading>Create your Goalcard</Heading>
      <CardCreator></CardCreator>
    </Container>
  );
};

export default CreateGoalcardPage;
