import React from "react";
import Avatar from "../../atoms/Avatar";
import UserStats from "../../molecules/UserStats";
import Navbar from "../../molecules/Navbar";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-full from-blue-500 to-blue-700 bg-gradient-to-b invisible lg:visible">
      <div className="py-8 flex flex-col items-center h-full gap-8">
        <Avatar />
        <UserStats />
        <Navbar />
      </div>
    </div>
  );
};

export default Sidebar;
