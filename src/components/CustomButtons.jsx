import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: var(--btn-color-primary);
  border-radius: 25px;
  border: 0;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
  padding: 16px 30px;
  text-align: center;

  &:hover,
  &:focus {
    background-color: var(--btn-color-primary-hover);
    border: 0;
    box-shadow: 0 0 2px var(--btn-color-primary);
  }

  &:active,
  &:visited {
    background-color: var(--btn-color-primary) !important;
    box-shadow: none !important;
    transition: 0.1s;
  }
`;

const AnswerButton = styled(StyledButton)`
  background-color: var(--btn-color-secondary);
  margin-left: auto;
  padding: 10px 20px;

  &:hover,
  &:focus {
    background-color: var(--btn-color-secondary);
    border: 0;
    box-shadow: none;
  }

  &:active,
  &:visited {
    background-color: var(--btn-color-secondary-hover) !important;
    box-shadow: none !important;
    transition: 0.1s;
  }
`;

const CustomButton = ({ children, answerButton }) => {
  return answerButton ? (
    <AnswerButton type="submit">{children}</AnswerButton>
  ) : (
    <StyledButton type="submit">{children}</StyledButton>
  );
};

export default CustomButton;
