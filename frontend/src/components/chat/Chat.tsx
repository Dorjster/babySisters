"use client";
import React, { useEffect, useRef, useState } from "react";
import { SentChat } from "./sentChat";
import { RecievedChat } from "./receiveChat";
import Image from "next/image";
import axios from "axios";
import { AxiosInstance } from "@/utils/axiosInstance";
import { IoIosSend } from "react-icons/io";
import { useData } from "@/context/userProvider";

interface msgTypes {
  id: string | number;
  // recieverId: string;
  author: string;
  message: string;
  time: string;
}

export const Chat = ({ socket, username, roomId }: any) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<msgTypes[]>([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { loggedInUserData } = useData();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const getMessages = async (id: string) => {
      const messages = await AxiosInstance.post("/getConversation", {
        id: roomId,
      });
      console.log(messages, "mess");

      setChat(messages.data.messages);

      if (loggedInUserData.role === "BabySitter") {
        setName(messages?.data?.parent?.name);
      } else {
        setName(messages?.data?.babySitter?.name);
      }
      if (loggedInUserData.role === "BabySitter") {
        setImage(messages?.data?.parent?.image);
      } else {
        setImage(messages?.data?.babySitter?.image);
      }
      // scrollToBottom();
    };

    getMessages(roomId);
  }, [roomId, chat, socket, loggedInUserData.role]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        // inline: "nearest",
      });
    }
  };

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: msgTypes = {
        id: roomId,
        author: username,

        message: currentMsg,
        time: new Date(Date.now()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      await socket.emit("send_message", msgData);
      console.log(socket);
      try {
        const msgID = await AxiosInstance.post("/createMsg", {
          message: msgData.message,
          // senderId: msgData.senderId,
          // recieverId: msgData.recieverId,
          author: msgData.author,
          time: msgData.time,
        });

        await AxiosInstance.post("/updateConversation", {
          id: roomId,
          message: msgID.data._id,
        });
      } catch (error: any) {
        console.log(error.message);
      }

      setCurrentMsg("");
      scrollToBottom();
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: msgTypes) => {
      setChat((pre) => {
        return [...pre, data];
      });
      scrollToBottom();
    });
  }, [socket]);
  // console.log(chat, "chats");

  return (
    <div className="w-[80%] flex h-full mt-[50px] ">
      <div className="w-full flex flex-col items-start h-full rounded-l-none">
        <div className="w-full flex items-center justify-start p-[30px] rounded-tr-xl rounded-l-none  top-[100px] bg-[white] border border-gray-200">
          {image && name && name.trim() !== "" ? (
            <Image
              src={image}
              alt={name}
              className="w-10 h-10 rounded-full mr-4"
              width={10}
              height={10}
            />
          ) : (
            <div
              className={`
      w-10 h-10 rounded-full flex items-center justify-center text-gray-600 text-xl font-bold mr-4`}
            >
              {name && name.trim() !== "" ? name.charAt(0).toUpperCase() : ""}
            </div>
          )}
          <p className="text-[20px] font-bold text-black">{name}</p>
        </div>

        <div className="w-full h-[70vh] flex flex-col rounded-xl justify-end rounded-t-none rounded-l-none  px-[20px] border-t border-l border-r border-gray-300  ">
          <div className="w-full flex  flex-col  overflow-y-scroll scrollbar-hide ">
            {chat &&
              chat.map(({ id, author, message, time }, key) => (
                <ul
                  key={key}
                  className="w-[98%] flex flex-col-reverse anchor scrollbar-hide"
                >
                  {roomId === roomId && author === username ? (
                    <SentChat message={message} time={time} />
                  ) : (
                    <RecievedChat
                      author={author}
                      message={message}
                      time={time}
                      image={image}
                    />
                  )}
                </ul>
              ))}
            <div ref={messagesEndRef} className="mb-[80px] " />
          </div>
          <div className="w-full flex gap-[20px] items-center mb-[10px]">
            <form
              onSubmit={(e) => sendData(e)}
              className="w-full flex items-center justify-center"
            >
              <input
                type="text"
                value={currentMsg}
                className="w-[100%] border border-blue-200 h-[50px] outline-none px-[30px] rounded-full"
                placeholder="Type your message.."
                onChange={(e) => setCurrentMsg(e.target.value)}
                autoFocus
              />

              {currentMsg.trim() !== "" && (
                <button className="w-[10%] flex items-center justify-center rounded-full p-2 font-bold text-blue-500 text-[18px] absolute right-[110px]">
                  {/* <IoIosSend className="text-white text-[26px]" /> */}
                  Send
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
