"use client";
import { Chat } from "@/components/chat/Chat";
import { io, Socket } from "socket.io-client";
import React, { useEffect, useState } from "react";

import { UserList } from "@/components/chat/UserList";
import { LoggedUser } from "@/components/chat/loggedUser";
import { useData } from "@/context/userProvider";

const URL = process.env.BACKEND;
console.log(URL);
interface Props {
  socket: Socket;
}

export const ChatMain = ({ socket }: Props) => {
  const [showChat, setShowChat] = useState(false);
  const [roomId, setroomId] = useState("");
  const { loggedInUserData } = useData();
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [id, setId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const idFromUrl = urlSearchParams.get("id");
      setId(idFromUrl);
    }
  }, []);

  // var socket: any;
  // socket = io("http://localhost:8000 " || "https://babysisters.onrender.com", {
  //   transports: ["websocket"],
  // });

  const handleJoin = (roomId: string) => {
    console.log("handleJoin", roomId);
    setShowChat(true);
    setroomId(roomId);
    setUserName("Room Number: " + roomId);
    setUser(loggedInUserData.name);
    console.log("userName", userName, roomId, "roomId");
    socket.emit("join_room", roomId);
  };

  return (
    <div className="flex w-full justify-center items-center h-[60%] mt-[20px]">
      <div className="w-[13%] flex flex-col items-start gap-2  rounded-xl rounded-r-none h-full ">
        <div className="px-4 py-3 border-b border-white w-full">
          <LoggedUser
            name={loggedInUserData.name}
            email={loggedInUserData.email}
            image={loggedInUserData.image}
          />
        </div>
        <div className="w-full h-full overflow-y-auto p-5">
          <UserList join={handleJoin} room="1" />
        </div>
      </div>
      <Chat username={user} socket={socket} roomId={roomId} recieverId={id} />
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
