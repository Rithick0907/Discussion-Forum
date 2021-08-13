import { Button } from "react-bootstrap";
import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, className, ...otherProps }) => {
  const { isSubmitting } = useFormikContext();
  const classNames = `custom-btn--primary ${className ? className : ""}`;
  return (
    <Button
      bsPrefix="custom-btn"
      type="submit"
      disabled={isSubmitting}
      className={classNames}
      {...otherProps}
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
