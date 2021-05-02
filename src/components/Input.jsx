import { Control, Errors } from "react-redux-form";
import { FormRow } from "../styles/Input.styles";
import validator, { errMsg } from "../validateRules";

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
