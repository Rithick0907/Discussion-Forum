import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  font-size: 1.7rem;

  span {
    margin-left: 10px;
  }

  .form-control[type="text"],
  .form-control[type="url"] {
    border: 0;
    border-bottom: 1px solid gray;
    padding: 5px;
    height: 40px;
    font-weight: 200;
    font-size: 1.4rem;
    margin: 14px 0;
    transition: all 0.3s ease;
  }

  .form-control:active,
  .form-control:focus {
    box-shadow: none;
    outline: none;
  }

  button.close > span {
    font-size: 25px;
    margin-right: 10px;
  }

  span.input-group-text {
    background-color: white;
    border: 0;
    height: 40px;
    margin: 14px 0 0 0;
    padding: 5px;
  }
`;
