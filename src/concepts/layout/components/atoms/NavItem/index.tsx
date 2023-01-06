import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  item: {
    name: string;
    path: string;
    icon: string;
  };
};

const NavItem: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  console.log("is same route", router.pathname === item.path);

  return (
    <Link href={item.path}>
      <div
        className={`w-full py-4 flex items-center px-14 gap-8 bg-blue-400 transition-all duration-300 ${
          router.pathname === item.path ? "brightness-125" : ""
        }`}
      >
        <Image
          src={item.icon}
          height={25}
          width={25}
          alt={`${item.name} icon`}
        />
        <span className="text-white text-lg">{item.name}</span>
      </div>
    </Link>
  );
};

export default NavItem;
