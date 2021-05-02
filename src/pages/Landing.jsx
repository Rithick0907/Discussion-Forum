import { Container } from "react-bootstrap";
import Feeds from "../components/Feeds";
import Navbar from "../components/Navbar";
import { LandingStyles } from "../styles/Landing.styles";

const Landing = () => (
  <LandingStyles>
    <Navbar addQuestion />
    <Container>
      <Feeds />
    </Container>
  </LandingStyles>
);

export default Landing;
