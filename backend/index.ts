// // export { connectDb } from "./db";
// import express, { Request, Response } from "express";
import { Server as WebSocketServer } from "socket.io";
// import cors from "cors";
// import { connectDb } from "./db";
// import {
//   loginRouter,
//   userRouter,
//   forgotRouter,
//   reviewRouter,
//   // messageRouter,
// } from "./router";
// import { Imagerouter } from "./router/uploadImg";

// import dotenv from "dotenv";
// import http from "http";

// import { timeRouter } from "./router/Time";
// import { Chat } from "./router/chat";
// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use(userRouter);
// app.use(loginRouter);
// app.use(forgotRouter);
// app.use(reviewRouter);
// app.use(Imagerouter);
// app.use(timeRouter);
// app.use(Chat);
// connectDb();

// const server = app.listen(8000, () => {
//   console.log("Server", "http://localhost:8000");
// });

// const io = require("socket.io")(server, {
//   pingTimeout: 60000,
//   cors: {
//     origin: "http://localhost:3000",
//     credentials: true,
//     methods: ["GET", "POST"],
//     optionsSuccessStatus: 200,
//     allowedHeaders: ["my-custom-header"],
//   },
//   transports: ["websocket", "polling", "flashsocket"],
// });

// io.on("connection", (socket: any) => {
//   // console.log("user connected", socket.id);

//   socket.on("join_room", (room: any) => {
//     console.log(`user with id-${socket.id} joined room - ${room}`);
//     socket.join(room);
//   });

//   socket.on("send_message", (data: any) => {
//     console.log(data, "msg");
//     socket.to(data.room).emit("receive_message", data);
//   });
// });

// // app.use("/api/messages", messageRouter);

// // const PORT = process.env.BACKEND_PORT || 8000;

// // server.listen(PORT, () => {
// //   console.log(`http://localhost:${PORT}`);
// // });

import express, { Request, Response } from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

import cors from "cors";

import dotenv from "dotenv";
import { connectDb } from "./db";
import {
  userRouter,
  loginRouter,
  forgotRouter,
  reviewRouter,
  Imagerouter,
  timeRouter,
  Chat,
} from "./router";

dotenv.config();

const app = express();
const server = http.createServer(app);
// const io: SocketIOServer = socketIo(server);

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(loginRouter);
app.use(forgotRouter);
app.use(reviewRouter);
app.use(Imagerouter);
app.use(timeRouter);
app.use(Chat);

connectDb();

// const io: SocketIOServer = require("socket.io")(server, {
//   // pingTimeout: 60000,
//   cors: {
//     origin: "http://localhost:3000",
//     // credentials: true,
//     methods: ["GET", "POST"],
//     // optionsSuccessStatus: 200,
//     // allowedHeaders: ["my-custom-header"],
//   },
//   // transports: ["websocket", "polling", "flashsocket"],
// });

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
    allowedHeaders: ["my-custom-header"],
  },
  transports: ["websocket", "polling"],
});

io.on("connection", (socket: any) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (room: string) => {
    console.log(`User with ID ${socket.id} joined room ${room}`);
    socket.join(room);
  });

  socket.on("send_message", (data: any) => {
    console.log(data, "msg");
    socket.to(data.room).emit("receive_message", data);
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
