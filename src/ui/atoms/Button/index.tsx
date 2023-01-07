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
};

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ className, color, ...props }) => {
  return (
    <button
      className={`${Object.values(colors[color]).join(
        " "
      )} ${className} p-2 rounded-md transition-all duration-300`}
      {...props}
      style={{
        backgroundColor: props.disabled ? "#ccc !important" : undefined,
      }}
    />
  );
};

export default Button;
