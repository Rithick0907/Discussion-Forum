import { useFormikContext } from "formik";
import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <Button onClick={handleSubmit}>{title}</Button>;
};

export default SubmitButton;
