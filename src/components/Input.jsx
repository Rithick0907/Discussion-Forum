import { Row } from "react-bootstrap";
import { Control, Errors } from "react-redux-form";
import styled from "styled-components";
import validator, { errMsg } from "../validateRules";

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

const getErrorMsg = (validatorList) => {
  let msg = {};
  validatorList.map((key) => (msg[key] = errMsg[key]));
  return msg;
};

const getValidators = (validatorList) => {
  let validators = {};
  validatorList.map((key) => (validators[key] = validator[key]));
  return validators;
};

const Input = ({ htmlFor, name, type, validators }) => (
  <>
    <label className="form-label" htmlFor={name}>
      {htmlFor}
    </label>
    <Control
      autoComplete="off"
      type={type}
      model={`.${name}`}
      id={name}
      name={name}
      className="form-control"
      validators={getValidators(validators)}
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
