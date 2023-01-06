import React from "react";
import NavItem from "../../atoms/NavItem";

const routes = [
  {
    name: "home",
    path: "/",
    icon: "/home.png",
  },
  {
    name: "ingressantes",
    path: "/ingressantes",
    icon: "/ingressantes.png",
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {routes.map((route) => (
        <NavItem item={route} key={`nav-item-${route.name}`} />
      ))}
    </div>
  );
};

export default Navbar;
