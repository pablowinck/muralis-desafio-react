import React from "react";

type Props = {
  options: {
    value: string;
    label: string;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

const Select: React.FC<
  React.SelectHTMLAttributes<HTMLSelectElement> & Props
> = ({ className, options, onChange, value, ...props }) => {
  return (
    <select
      id="countries"
      onChange={onChange}
      value={value}
      className={`border-blue-200 border-2 rounded-md 
      ${
        props.disabled
          ? "bg-gray-200 pointer-events-none select-none"
          : "bg-white cursor-pointer hover:border-blue-600"
      } transition-all duration-300 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
