import { ErrorMessage, useField } from "formik";
import { Form, InputGroup } from "react-bootstrap";

import React from "react";

const FormInputGroup = ({ name, prepend, ...otherAttribute }) => {
  const [field, meta] = useField(name);
  const { error, touched } = meta;
  return (
    <Form.Group controlId={name}>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>{prepend}</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          isValid={touched && !error}
          isInvalid={touched && !!error}
          {...field}
          {...otherAttribute}
        />
        <ErrorMessage className="text-danger" name={name} component="div" />
      </InputGroup>
    </Form.Group>
  );
};

export default FormInputGroup;
