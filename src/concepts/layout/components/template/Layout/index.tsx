import React from "react";
import Sidebar from "../../organisms/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-blue-100 overflow-hidden">
      <div className="h-screen w-full grid grid-cols-layout-sm lg:grid-cols-layout-lg xl:grid-cols-layout-xl">
        <Sidebar />
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
