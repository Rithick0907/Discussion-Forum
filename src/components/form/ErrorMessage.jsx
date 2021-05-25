import React from "react";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <div className="text-danger mt-3">{error}</div>;
};

export default ErrorMessage;
