import { Form, FormGroup } from "react-bootstrap";

import ErrorMessage from "./ErrorMessage";
import React from "react";
import { useFormikContext } from "formik";

const FormField = ({ name, label, ...otherProps }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <FormGroup controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className="form-control-lg"
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </FormGroup>
  );
};

export default FormField;
