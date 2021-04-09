import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Navbar from "../component/Navbar";
import Feeds from "../component/Feeds";

const LandingStyles = styled.div`
  background-color: rgb(245, 245, 248);
  width: 100%;
  height: 100vh;
`;

const Landing = () => (
  <LandingStyles>
    <header>
      <Navbar addQuestion />
    </header>
    <main>
      <Container>
        <Feeds />
      </Container>
    </main>
  </LandingStyles>
);

export default Landing;
