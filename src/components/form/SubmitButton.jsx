import { useFormikContext } from "formik";
import React from "react";
import { StyledButton as Button } from "../../styles/CustomButtons.styles";

const SubmitButton = ({ title, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onClick={handleSubmit} {...otherProps}>
      {title}
    </Button>
  );
};

export default SubmitButton;
