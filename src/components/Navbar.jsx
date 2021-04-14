import { Container, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
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

  .container a {
    color: inherit;
    cursor: pointer;
    margin-left: 10px;
  }
`;

const renderTooltip = (props) => <Tooltip {...props}>Logout</Tooltip>;

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
      {addQuestion && (
        <div>
          <Button>Add Question</Button>
          <NavLink to="/login">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
              content="Logout"
            >
              <IoLogOutOutline size="3rem" />
            </OverlayTrigger>
          </NavLink>
        </div>
      )}
    </Container>
  </StyledNavbar>
);

export default CustomNavbar;
