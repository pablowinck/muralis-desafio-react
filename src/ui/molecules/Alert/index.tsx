import React, { useEffect, useState } from "react";

type Props = {
  color: "error" | "success";
  open: boolean;
  title: string;
  message: string;
};

const Alert: React.FC<Props> = ({ color, open, title, message }) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsAlertOpen(open);

    const timeout = setTimeout(() => {
      setIsAlertOpen(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [open]);

  const colors = {
    error: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-400",
    },
    success: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-400",
    },
  };

  return isAlertOpen ? (
    <div className="fixed left-0 right-0 bottom-10 m-auto max-w-[22rem] w-auto animate-enter-down">
      <div
        className={`${Object.values(colors[color]).join(
          " "
        )} border px-4 py-3 rounded flex flex-col items-center justify-center`}
        role="alert"
      >
        <strong className="font-bold">{title}</strong>
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Alert;
