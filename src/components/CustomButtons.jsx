import { Button } from "react-bootstrap";
import cn from "classnames";

const CustomButton = ({
  title,
  answerButton,
  className,
  ...otherAttribute
}) => (
  <Button
    bsPrefix="custom-btn"
    className={cn(className, {
      "custom-btn--secondary ml-auto": answerButton,
      "custom-btn--primary": !answerButton,
    })}
    type="submit"
    {...otherAttribute}
  >
    {title}
  </Button>
);

export default CustomButton;
