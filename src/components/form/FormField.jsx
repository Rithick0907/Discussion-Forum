import { useFormikContext } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, label, ...otherProps }) => {
  const { handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control onChange={handleChange(name)} {...otherProps} />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default FormField;
