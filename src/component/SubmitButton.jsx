import styled from "styled-components";
import { Button } from "react-bootstrap";

export const CustomButton = styled(Button)`
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
    <CustomButton type="submit">{name}</CustomButton>
  </div>
);

export default SubmitButton;
