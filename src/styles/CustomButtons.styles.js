import styled, { css } from "styled-components";

import { Button } from "react-bootstrap";

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
    outline: none;
    box-shadow: none !important;
  }

  &:active,
  &:visited {
    box-shadow: none !important;
    transition: 0.1s;
    outline: none;
  }
`;

export const StyledButton = styled(Button)`
  ${ButtonSharedStyles}
  background-color: var(--btn-color-primary);
  padding: 16px 30px;

  &:disabled,
  &[disabled] {
    background-color: var(--btn-color-primary-hover);
  }

  &:hover,
  &:focus {
    background-color: var(--btn-color-primary-hover);
  }

  &:active,
  &:visited {
    background-color: var(--btn-color-primary) !important;
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
