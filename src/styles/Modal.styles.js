import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  font-size: 1.7rem;

  .modal-body > span {
    margin-left: 10px;
  }

  .form-group {
    font-size: 1.4rem;
  }

  .form-control {
    border: 0;
    border-bottom: 1px solid gray;
    height: 40px;
    transition: all 0.3s ease;
  }

  .form-control:active,
  .form-control:focus {
    box-shadow: none;
    outline: none;
  }

  .form-group > .input-group {
    border-bottom: 1px solid gray;
    margin-top: 20px;
  }

  .input-group > .form-control {
    border: 0;
    font-size: 1.4rem;
  }

  span.input-group-text {
    background-color: white;
    border: 0;
    height: 40px;
    padding: 0;
  }

  button.close > span {
    font-size: 25px;
    margin-right: 10px;
  }
`;
