import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Button from "./CustomButtons";
import Modal from "./QuestionModal";
import Logout from "./Logout";
import { StyledNavbar } from "../styles/Navbar.styles";

const CustomNavbar = ({ addQuestion }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <StyledNavbar expand="lg">
      <Container>
        <Navbar.Brand href="/login">
          <img src="/favicon.ico" alt="Discussion Forum Logo" />
          Discussion Forum
        </Navbar.Brand>
        {addQuestion && (
          <div>
            <Button onClick={handleShow}>Add Question</Button>
            <Modal show={show} title="Add Question" onHide={handleClose} />
            <Logout />
          </div>
        )}
      </Container>
    </StyledNavbar>
  );
};

export default CustomNavbar;
