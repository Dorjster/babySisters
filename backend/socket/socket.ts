import { Server as WebSocketServer } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new WebSocketServer(server, {
  cors: {
    origin: "hhtp://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("join_room", (data) => {
    console.log(data);
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("server is running");
});

export { app, io, server };
