import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: var(--bg-color-secondary);
  box-shadow: 0 0 5px gray;
  min-height: 80px;
  padding: 15px;
  width: 100%;

  .container {
    padding-left: 0;
  }
  .navbar-brand {
    color: var(--font-color);
    font-size: 2.5rem;
    font-weight: 500px;
    text-align: center;
  }

  .navbar-brand > img {
    margin: 4px 10px;
    width: 25px;
    height: 25px;
  }

  .container a {
    color: inherit;
    cursor: pointer;
    margin-left: 10px;
  }

  @media (max-width: 550px) {
    .navbar-brand {
      font-size: 1.5rem;
    }
    .navbar-brand > img {
      width: 20px;
      height: 20px;
    }
  }
`;
