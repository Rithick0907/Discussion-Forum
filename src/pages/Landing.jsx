import { Container } from "react-bootstrap";
import Feeds from "../components/Feeds";
import Navbar from "../components/Navbar";

const Landing = () => (
  <div className="landing-page">
    <Navbar addQuestion />
    <Container className="landing-page__container">
      <Feeds />
    </Container>
  </div>
);

export default Landing;
