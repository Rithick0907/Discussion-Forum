import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Feeds from "../components/Feeds";

const LandingStyles = styled.div`
  background-color: rgb(245, 245, 248);
  width: 100%;

  & > .container {
    font-size: 1.5rem;
    padding: 4rem 0;
  }
`;

const Landing = () => (
  <LandingStyles>
    <Navbar addQuestion />
    <Container>
      <Feeds />
    </Container>
  </LandingStyles>
);

export default Landing;
