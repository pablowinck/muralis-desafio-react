import React from "react";

const Text: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return <span className={`${className}`} {...props} />;
};

export default Text;
