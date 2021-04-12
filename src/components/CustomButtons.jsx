import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: rgb(252, 67, 100);
  border: 0;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
  padding: 16px 30px;
  text-align: center;

  &:hover {
    background-color: rgb(252, 42, 79);
  }
`;

const AnswerButton = styled(StyledButton)`
  background-color: rgb(32, 189, 175);
  margin-left: auto;
  padding: 10px 20px;

  &:hover {
    background-color: rgb(36, 175, 162);
  }
`;

const CustomButton = ({ children, answerButton }) => {
  return (
    <>
      {answerButton ? (
        <AnswerButton type="submit">{children}</AnswerButton>
      ) : (
        <StyledButton type="submit">{children}</StyledButton>
      )}
    </>
  );
};

export default CustomButton;
