import { StyledButton as Button } from "../../styles/CustomButtons.styles";
import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, ...otherProps }) => {
  const { isSubmitting } = useFormikContext();
  return (
    <Button type="submit" disabled={isSubmitting} {...otherProps}>
      {title}
    </Button>
  );
};

export default SubmitButton;
