// export { connectDb } from "./db";
import express, { Request, Response } from "express";
import cors from "cors";
import { connectDb } from "./db";
import { loginRouter, userRouter, forgotRouter, reviewRouter, messageRouter } from "./router";
import { Imagerouter } from "./router/uploadImg";
import { algoliaIndex } from "./algogia/algolia";
import dotenv from "dotenv"

dotenv.config()
// const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
connectDb();
app.use(userRouter);
app.use(loginRouter);
app.use(forgotRouter);
app.use(reviewRouter);
app.use(Imagerouter);

app.use("/api/messages", messageRouter);

const PORT = process.env.BACKEND_PORT || 8000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
