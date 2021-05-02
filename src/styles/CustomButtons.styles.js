import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";

const ButtonSharedStyles = css`
  border-radius: 25px;
  border: 0;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
  text-align: center;

  &:hover,
  &:focus {
    border: 0;
  }

  &:active,
  &:visited {
    box-shadow: none !important;
    transition: 0.1s;
  }
`;

export const StyledButton = styled(Button)`
  ${ButtonSharedStyles}
  background-color: var(--btn-color-primary);
  padding: 16px 30px;

  &:hover,
  &:focus {
    background-color: var(--btn-color-primary-hover);
    box-shadow: 0 0 2px var(--btn-color-primary);
  }

  &:active,
  &:visited {
    background-color: var(--btn-color-primary) !important;
  }

  @media (max-width: 550px) {
    font-size: 0.9rem;
    padding: 10px 15px;
  }
`;

export const AnswerButton = styled(Button)`
  ${ButtonSharedStyles}
  background-color: var(--btn-color-secondary);
  margin-left: auto;
  padding: 10px 20px;

  &:hover,
  &:focus {
    background-color: var(--btn-color-secondary);
    box-shadow: none;
  }

  &:active,
  &:visited {
    background-color: var(--btn-color-secondary-hover) !important;
  }
`;
