import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Button from "./CustomButtons";

const StyledNavbar = styled(Navbar)`
  background-color: var(--bg-color-secondary);
  box-shadow: 0 0 5px gray;
  min-height: 80px;
  padding: 15px;
  width: 100%;

  .navbar-brand {
    color: var(--font-color);
    display: flex;
    font-size: 2.5rem;
    font-weight: 500px;
    text-align: center;
  }
  .navbar-brand img {
    margin: 4px 10px;
  }
`;

const CustomNavbar = ({ addQuestion }) => (
  <StyledNavbar expand="lg">
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
      {addQuestion && <Button>Add Question</Button>}
    </Container>
  </StyledNavbar>
);

export default CustomNavbar;
