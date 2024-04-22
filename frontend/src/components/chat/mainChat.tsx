"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { ChatMain } from "@/components/chat";

export const MainChat = () => {
  const [socket, setSocket] = useState<Socket<any, any> | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8000", {
      transports: ["websocket"],
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return <div>{socket && <ChatMain socket={socket} />}</div>;
};
