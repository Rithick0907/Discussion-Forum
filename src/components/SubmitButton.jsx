import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonStyles = styled(Button)`
  background-color: rgb(252, 67, 100);
  border: 0;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
  padding: 16px 30px;

  &:hover {
    background-color: rgb(252, 42, 79);
  }
`;

const SubmitButton = ({ name }) => (
  <div className="text-center">
    <ButtonStyles type="submit">{name}</ButtonStyles>
  </div>
);

export default SubmitButton;
