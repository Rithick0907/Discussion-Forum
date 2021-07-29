import { ErrorMessage, useField } from "formik";
import { Form, FormGroup } from "react-bootstrap";

const FormField = ({ name, label, ...otherAttributes }) => {
  const [field, meta] = useField(name);
  const { error, touched } = meta;
  return (
    <FormGroup controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className="form-control-lg"
        isValid={touched && !error}
        isInvalid={touched && !!error}
        {...field}
        {...otherAttributes}
      />
      <ErrorMessage component="div" name={name} className="text-danger" />
    </FormGroup>
  );
};

export default FormField;
