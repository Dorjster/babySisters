import Image from "next/image";
import React, { useState } from "react";

export const UserList = (props: any) => {
  const { room, join, name, profilePicture } = props;
  const firstInitial = name.charAt(0).toUpperCase();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => join(room)}
      className="relative top-3 rounded-xl w-full p-[10px] cursor-pointer transition duration-300 ease-in-out hover:scale-105 flex items-center border border-gray-200"
      style={{
        border: isHovered ? "1px solid #3b82f6" : "1px solid transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-transparent">
        {profilePicture ? (
          <Image
            src={profilePicture}
            alt={name}
            className="w-full h-full object-cover"
            width={20}
            height={20}
          />
        ) : (
          <div className="w-full h-full flex items-center bg-gray-200 justify-center text-gray-600 text-xl font-bold">
            {firstInitial}
          </div>
        )}
      </div>
      <p className="text-[20px] font-bold ml-4">{name}</p>
    </button>
  );
};
