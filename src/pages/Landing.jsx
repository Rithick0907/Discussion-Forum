import { Container } from "react-bootstrap";
import styled from "styled-components";
import Feeds from "../components/Feeds";
import Navbar from "../components/Navbar";

const LandingStyles = styled.div`
  background-color: var(--bg-color-primary);
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
