import styled from "styled-components";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { IoIosGlobe } from "react-icons/io";

const NavStyles = styled.div`
  .navbar {
    background-color: white;
    width: 100%;
  }
  .navbar-brand {
    color: grey;
    font-size: 2.5rem;
    font-weight: 500px;
  }
  .navbar-brand img {
    margin: 0 10px 5px 0;
  }
`;

const CustomNavbar = ({ addQuestion }) => (
  <NavStyles>
    <Navbar id="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/login">
          <img
            src="/favicon.ico"
            alt="Discussion Forum Logo"
            width="25px"
            height="25px"
          />
          Discussion Forum
        </Navbar.Brand>
        {addQuestion && (
          <Form inline className="ml-auto">
            <Button variant="info">
              <IoIosGlobe size="1.5em" />
              <span className="ml-2">Add Question</span>
            </Button>
          </Form>
        )}
      </Container>
    </Navbar>
  </NavStyles>
);

export default CustomNavbar;
