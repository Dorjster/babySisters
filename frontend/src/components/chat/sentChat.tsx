import React from "react";

type SentChatProps = {
  message: string;
  time: string;
};

export const SentChat = (props: SentChatProps) => {
  const { message, time } = props;
  return (
    <li className="w-fit max-w-[90%] self-end mb-[30px]">
      <p className="p-[15px] bg-blue-500 rounded-[20px] text-white max-w-[80vw] break-words ">
        {message}
      </p>
      <div className="w-full flex justify-end items-center">
        <span className="text-xs text-slate-500 mr-[15px] mt-[5px]">
          {time}
        </span>
      </div>
    </li>
  );
};
