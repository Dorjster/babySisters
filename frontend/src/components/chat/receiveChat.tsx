import Image from "next/image";
import React from "react";

type RecievedChatProps = {
  message: string;
  time: string;
  author: string;
  image: string;
};

export const RecievedChat = (props: RecievedChatProps) => {
  const { message, time, author, image } = props;
  return (
    <li className="w-fit max-w-[90%] self-start ">
      <span className="text-xs text-slate-500 font-bold ml-[5px]">
        {author}
      </span>

      <div className="rounded-full  flex items-center">
        {image ? (
          <Image
            src={image}
            alt={author}
            className="w-10 h-10 object-cover rounded-full mr-[10px]"
            width={20}
            height={20}
          />
        ) : (
          <div className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full text-black mr-2">
            {author && author.trim() !== ""
              ? author.charAt(0).toUpperCase()
              : ""}
          </div>
        )}
        <p className="p-[10px] bg-gray-200 rounded-xl rounded-bl-none text-black max-w-[80vw] break-words">
          {message}
        </p>
      </div>

      <div className="w-full flex justify-start items-center ml-[50px]">
        <span className="text-xs text-slate-500">{time}</span>
      </div>
    </li>
  );
};
