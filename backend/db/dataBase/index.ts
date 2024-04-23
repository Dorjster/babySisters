import { connect, set } from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

type CONNECTION_STRING = string;

export const connectDb = async () => {
  set("strictQuery", false);
  try {
    await connect(process.env.CONNECTION_STRING as CONNECTION_STRING);
    console.log("Database tei holbogdsoon huurhnuudee? kek");
  } catch (error) {
    console.log("Database connection is unsuccessful how sad.");
  }
};
