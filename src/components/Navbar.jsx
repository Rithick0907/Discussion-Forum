import { Container, Nav, Navbar } from "react-bootstrap";

import Button from "./CustomButtons";
import Logout from "./Logout";
import Modal from "./QuestionModal";
import { useState } from "react";

const CustomNavbar = ({ addQuestion }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <Navbar sticky="top" expand="sm">
      <Container className="navbar__container">
        <Navbar.Brand className="navbar__brand" href="/login">
          <img src="/favicon.ico" alt="Discussion Forum Logo" />
          Discussion Forum
        </Navbar.Brand>
        {addQuestion && (
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <div className="question-btn">
                  <Button onClick={handleShow} title="Add Question" />
                  <Modal
                    show={show}
                    title="Add Question"
                    onHide={handleClose}
                  />
                  <Logout />
                </div>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
