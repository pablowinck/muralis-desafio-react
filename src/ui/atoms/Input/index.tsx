import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={`border-blue-200 border-2 rounded-md 
      ${props.disabled ? "bg-gray-200" : "bg-white"}
      ${
        !props.disabled ? "hover:border-blue-600" : ""
      } transition-all duration-300 p-1 ${className}`}
      {...props}
    />
  );
};

export default Input;
