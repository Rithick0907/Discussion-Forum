import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <div className="text-danger">{error}</div>;
};

export default ErrorMessage;
