import { Row } from "react-bootstrap";
import { Control, Errors } from "react-redux-form";
import styled from "styled-components";
import { errMsg } from "../validateRules";

export const FormRow = styled(Row)`
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

const getErrorMsg = (validators) => {
  let msg = {};
  for (let rule in validators) msg[rule] = errMsg[rule];
  return msg;
};

const Input = ({ htmlFor, name, type, validators }) => (
  <>
    <label className="form-label" htmlFor={name}>
      {htmlFor}
    </label>
    <Control
      type={type}
      model={`.${name}`}
      id={name}
      name={name}
      className="form-control"
      validators={validators}
    />
    <Errors
      className="text-danger"
      model={`.${name}`}
      show="touched"
      messages={getErrorMsg(validators)}
    />
  </>
);

export default Input;
