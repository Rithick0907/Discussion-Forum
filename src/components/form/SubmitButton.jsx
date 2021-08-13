import { Button } from "react-bootstrap";
import cn from "classnames";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, className, ...otherAttributes }) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      bsPrefix="custom-btn"
      className={cn(className)}
      type="submit"
      disabled={isSubmitting}
      {...otherAttributes}
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
