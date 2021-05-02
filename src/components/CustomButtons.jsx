import { StyledButton, AnswerButton } from "../styles/CustomButtons.styles";

const CustomButton = ({ children, answerButton, onClick }) =>
  answerButton ? (
    <AnswerButton onClick={onClick} type="submit">
      {children}
    </AnswerButton>
  ) : (
    <StyledButton onClick={onClick} type="submit">
      {children}
    </StyledButton>
  );

export default CustomButton;
