import { Form } from "react-bootstrap";
import styled from "styled-components";

const StyledInput = styled.div`
  .form-label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-size: 1.3rem;
  }
  .form-control {
    padding: 5px 10px;
    height: 40px;
    font-weight: 200;
    font-size: 1.2rem;
    margin-bottom: 14px;
    transition: all 0.3s ease;
  }
`;

const Input = ({ children, type }) => (
  <StyledInput>
    <Form.Group controlId={`formBasicEmail ${type}`}>
      <Form.Label>{children}</Form.Label>
      <Form.Control autoComplete="off" type={type} />
    </Form.Group>
  </StyledInput>
);

export default Input;
