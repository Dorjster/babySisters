import Image from "next/image";
import React from "react";

export const UserList = (props: any) => {
  const { room, join, name, profilePicture } = props;
  const firstInitial = name.charAt(0).toUpperCase();

  return (
    <button
      onClick={() => join(room)}
      className="relative top-3  rounded-xl w-full p-[10px] cursor-pointer transition duration-300 ease-in-out hover:scale-105 flex items-center"
      style={{ border: "1px solid transparent" }}
      onMouseOver={(e) => {
        e.currentTarget.style.border = "1px solid #3b82f6";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.border = "1px solid transparent";
      }}
    >
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-transparent">
        {profilePicture ? (
          <Image
            src={profilePicture}
            alt={name}
            className="w-full h-full object-cover"
            width={10}
            height={10}
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
