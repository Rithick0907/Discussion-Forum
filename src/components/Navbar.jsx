import { Container, Nav, Navbar } from "react-bootstrap";

import Button from "./CustomButtons";
import Logout from "./Logout";
import Modal from "./QuestionModal";
import { StyledNavbar } from "../styles/Navbar.styles";
import { useState } from "react";

const CustomNavbar = ({ addQuestion }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <StyledNavbar sticky="top" expand="sm">
      <Container>
        <Navbar.Brand href="/login">
          <img src="/favicon.ico" alt="Discussion Forum Logo" />
          Discussion Forum
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {addQuestion && (
              <div className="question-btn">
                <Button onClick={handleShow}>Add Question</Button>
                <Modal show={show} title="Add Question" onHide={handleClose} />
                <Logout />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default CustomNavbar;
