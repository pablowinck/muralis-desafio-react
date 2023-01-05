import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="bg-slate-400 h-screen w-full">{children}</div>;
};

export default Layout;
