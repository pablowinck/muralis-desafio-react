import React from "react";

type Props = {
  children: React.ReactNode;
};

const Label: React.FC<Props> = ({ children }) => {
  return (
    <span className="w-4/5 bg-blue-600 p-2 text-lg animate-enter">
      {children}
    </span>
  );
};

export default Label;
