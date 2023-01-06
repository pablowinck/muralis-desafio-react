import React from "react";
import Sidebar from "../../organisms/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-blue-100 overflow-hidden">
      <div className="h-screen w-full grid grid-cols-layout-sm md:grid-cols-layout-md lg:grid-cols-layout-lg xl:grid-cols-layout-xl ">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
