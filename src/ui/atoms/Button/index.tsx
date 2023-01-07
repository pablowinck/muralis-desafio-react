import React from "react";

type Props = {
  color: "alert" | "success";
};

const colors = {
  alert: {
    bg: "bg-alert",
    text: "text-white",
    hover: "hover:bg-alert-hover",
  },
  success: {
    bg: "bg-success",
    text: "text-white",
    hover: "hover:bg-success-hover",
  },
  disabled: {
    bg: "bg-gray-200",
    text: "text-gray-400",
    hover: "hover:bg-gray-200",
  },
};

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ className, color, disabled, ...props }) => {
  return (
    <button
      className={`${Object.values(colors[disabled ? "disabled" : color]).join(
        " "
      )} ${className} p-2 rounded-md transition-all duration-300
      ${disabled ? "pointer-events-none select-none" : "cursor-pointer"}
      `}
      {...props}
    />
  );
};

export default Button;
