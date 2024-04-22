"use client";
import React, { useEffect, useState } from "react";
import { SentChat } from "./sentChat";
import { RecievedChat } from "./receiveChat";
import Image from "next/image";
import axios from "axios";
import { AxiosInstance } from "@/utils/axiosInstance";
import { IoIosSend } from "react-icons/io";

interface msgDataTypes {
  id: string;
  recieverId: string;
  senderId: string;
  message: string;
  time: string;
}

export const Chat = ({ socket, username, roomId, recieverId }: any) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<msgDataTypes[]>([]);

  useEffect(() => {
    const getMessages = async (id: string) => {
      const messages = await AxiosInstance.post(`/getConversation`, {
        id: id,
      });
      console.log(messages, "mess");

      setChat(messages.data.messages);
    };

    getMessages(roomId);
  }, [roomId]);

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: msgDataTypes = {
        id: roomId,
        senderId: username,
        recieverId: recieverId,
        message: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", msgData);

      try {
        const msgID = await AxiosInstance.post("/createMsg", {
          message: msgData.message,
          senderId: msgData.senderId,
          recieverId: msgData.recieverId,
          time: msgData.time,
        });

        await axios.post("/updateConversation", {
          id: msgData.id,
          message: msgID.data._id,
        });
      } catch (error: any) {
        console.log(error.message);
      }
      setCurrentMsg("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: msgDataTypes) => {
      setChat((pre) => {
        return [...pre, data];
      });
    });
  }, [socket]);

  return (
    <div className="w-[40%] flex h-full">
      {/* <div>{chat}</div> */}
      <div className="w-full flex flex-col items-start h-full rounded-l-none">
        <div className="w-full flex items-center gap-[2%] justify-start p-[30px] rounded-tr-xl rounded-l-none">
          <p className="text-[20px] font-bold text-black ">{roomId}</p>
        </div>
        <div className="w-full h-full flex flex-col rounded-xl justify-end rounded-t-none rounded-l-none  p-[20px]">
          <div className="w-full flex  flex-col  overflow-y-scroll scrollbar-hide ">
            {chat &&
              chat.map(({ id, recieverId, senderId, message, time }, key) => (
                <ul
                  key={key}
                  className="w-full flex flex-col-reverse anchor scrollbar-hide"
                >
                  {roomId === roomId && senderId === username ? (
                    <SentChat message={message} time={time} />
                  ) : (
                    <RecievedChat
                      author={senderId}
                      message={message}
                      time={time}
                    />
                  )}
                </ul>
              ))}
          </div>
          <div className="w-full flex gap-[20px] items-center">
            <form
              onSubmit={(e) => sendData(e)}
              className="w-full flex items-center justify-center"
            >
              <input
                type="text"
                value={currentMsg}
                className="w-[90%] border-[2px] border-solid border-blue-200 h-[50px] rounded-md outline-none p-[10px]"
                placeholder="Type your message.."
                onChange={(e) => setCurrentMsg(e.target.value)}
              />
              <button className="w-[10%] flex items-center justify-center rounded-full p-2 bg-blue-500 ">
                <IoIosSend className="text-white text-[26px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
