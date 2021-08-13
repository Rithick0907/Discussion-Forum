import { Button } from "react-bootstrap";

const CustomButton = ({ title, answerButton, className, ...otherProps }) => {
  const classNames = `${className !== "" ? className : ""} ${
    answerButton ? "custom-btn--secondary ml-auto" : "custom-btn--primary"
  }`;

  return (
    <Button
      bsPrefix="custom-btn"
      className={classNames}
      type="submit"
      {...otherProps}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
