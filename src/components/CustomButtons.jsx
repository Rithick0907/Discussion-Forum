import { Button } from "react-bootstrap";
import cn from "classnames";

const CustomButton = ({ title, answerButton, className, ...otherProps }) => (
  <Button
    bsPrefix="custom-btn"
    className={cn(className, {
      "custom-btn--secondary ml-auto": answerButton,
      "custom-btn--primary": !answerButton,
    })}
    type="submit"
    {...otherProps}
  >
    {title}
  </Button>
);

export default CustomButton;
