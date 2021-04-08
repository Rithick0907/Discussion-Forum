import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../component/Navbar";
import Feeds from "../component/Feeds";
import "../css/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <header>
        <Navbar addQuestion />
      </header>
      <main>
        <Container>
          <Feeds />
        </Container>
      </main>
    </div>
  );
}

export default Landing;
