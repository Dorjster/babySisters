// export { connectDb } from "./db";
import express, { Request, Response } from "express";
import { Server as WebSocketServer } from "socket.io";
import cors from "cors";
import { connectDb } from "./db";
import {
  loginRouter,
  userRouter,
  forgotRouter,
  reviewRouter,
  messageRouter,
} from "./router";
import { Imagerouter } from "./router/uploadImg";
import { algoliaIndex } from "./algogia/algolia";
import dotenv from "dotenv";
import http from "http";
// import { app, server } from "./socket/socket";
import { timeRouter } from "./router/Time";
dotenv.config();
const app = express();
const server = http.createServer(app);
// const port = process.env.PORT;

app.use(cors());
app.use(express.json());
connectDb();
app.use(userRouter);
app.use(loginRouter);
app.use(forgotRouter);
app.use(reviewRouter);
app.use(Imagerouter);
app.use(timeRouter);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
    allowedHeaders: ["my-custom-header"],
  },
  transports: ["websocket", "polling", "flashsocket"],
});

io.on("connection", (socket: any) => {
  console.log("user connected", socket.id);

  socket.on("join_room", (data: any) => {
    console.log(data);
    socket.join(data);
  });

  socket.on("send_message", (data: any) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });
});

app.use("/api/messages", messageRouter);

const PORT = process.env.BACKEND_PORT || 8000;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
