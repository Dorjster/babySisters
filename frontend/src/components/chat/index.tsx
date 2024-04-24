"use client";
import { Chat } from "@/components/chat/Chat";
import { io, Socket } from "socket.io-client";
import React, { useEffect, useState } from "react";

import { UserList } from "@/components/chat/UserList";
// import { LoggedUser } from "@/components/chat/loggedUser";
import { useData } from "@/context/userProvider";
import { AxiosInstance } from "@/utils/axiosInstance";
// import { ParentType, ProfileType } from "../../..";

interface Props {
  socket: Socket;
}

interface Conversation {
  _id: string;
  babySitter: Babysitter;
  parent: Parent;
  messages: Message[];
  roomId: string;
}

interface Message {
  _id: string;
  author: string;
  message: string;
  time: string;
}

type Babysitter = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  address?: string;
  about?: string;
  gender?: boolean;
  image?: string;
  verification?: boolean;
  info_id: object;
  passport_id?: string;
  review?: string[];
  otp?: string;
  role: string;
};

type Parent = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  address?: string;
  job_description?: string;
  wage?: number;
  available_time?: object[];
  image: string;
  number_of_children: string[];
  age_of_children: string[];
  verification?: boolean;
  otp?: string;
  role: string;
};

export const ChatMain = ({ socket }: Props) => {
  const [showChat, setShowChat] = useState(false);
  const [roomId, setroomId] = useState("");
  const { loggedInUserData } = useData();
  // const [userName, setUserName] = useState("");
  // const [user, setUser] = useState("");
  const [convers, setConvers] = useState<Conversation[]>([]);
  const [id, setId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const idFromUrl = urlSearchParams.get("id");
      setId(idFromUrl);
    }
  }, []);

  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await AxiosInstance.get("/getAllConvers");
        setConvers(data);

        return data;
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);
  // console.log(convers[0]?.babySitter, "asd");

  const handleJoin = (roomId: string) => {
    setShowChat(true);
    setroomId(roomId);
    socket.emit("join_room", roomId);
  };

  const filteredConvers = convers.filter(
    (conversation) =>
      conversation.parent._id === loggedInUserData._id ||
      conversation.babySitter._id === loggedInUserData._id
  );

  return (
    <div className="flex  w-full justify-start  h-[60%] mt-[20px]">
      <div className="w-[13%] flex flex-col items-start gap-2 rounded-xl rounded-r-none h-full">
        <div className="px-4 py-3 border-b border-white w-full"></div>
        <div className="w-full overflow-y-auto p-5 ">
          {filteredConvers.map((conversation) => (
            <div key={conversation._id}>
              <UserList
                join={handleJoin}
                room={conversation.roomId}
                name={
                  loggedInUserData.role === "BabySitter"
                    ? conversation.parent.name
                    : conversation.babySitter.name
                }
                profilePicture={
                  loggedInUserData.role === "BabySitter"
                    ? conversation.parent.image
                    : conversation.babySitter.image
                }
              />
            </div>
          ))}
        </div>
      </div>
      <Chat username={loggedInUserData.name} socket={socket} roomId={roomId} />
    </div>
  );
};

// "use client";
// import { useEffect, useState } from "react";
// import { io, Socket } from "socket.io-client";

// interface Props {
//   socket: Socket;
// }

// export const ChatMain = ({ socket }: Props) => {
//   const [messageReceived, setMessageReceived] = useState("");
//   const [room, setRoom] = useState("");
//   const [message, setMessage] = useState("");

//   // var socket: any;
//   // socket = io("http://localhost:8000 ", {
//   //   transports: ["websocket"],
//   // });

//   const joinRoom = () => {
//     socket.emit("join_room", room);
//   };
//   const sendMessage = () => {
//     socket.emit("send_message", { message, room });
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data: any) => {
//       setMessageReceived(data.message);
//     });
//   }, [socket]);

//   console.log(messageReceived);
//   console.log(message, room);

//   return (
//     <div>
//       <input
//         type="text"
//         value={room}
//         onChange={(e) => {
//           setRoom(e.target.value);
//         }}
//       />
//       <button onClick={joinRoom}>join</button>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => {
//           setMessage(e.target.value);
//         }}
//       />
//       <button onClick={sendMessage}>send</button>

//       <div> {messageReceived}</div>
//     </div>
//   );
// };
