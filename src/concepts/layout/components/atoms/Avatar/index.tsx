import Image from "next/image";
import React from "react";

const Avatar: React.FC = () => (
  <Image
    src="/default-profile.png"
    height={170}
    width={170}
    alt="profile image"
    className="drop-shadow-lg"
  />
);

export default Avatar;
