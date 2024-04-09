// export { connectDb } from "./db";
import express, { Request, Response } from "express";
import cors from "cors";
import { connectDb } from "./db";
import { loginRouter, userRouter, forgotRouter, reviewRouter } from "./router";
import { Imagerouter } from "./router/uploadImg";
import { algoliaIndex } from "./algogia/algolia";

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

app.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
