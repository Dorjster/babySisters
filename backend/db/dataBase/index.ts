import { connect, set } from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

const CONNECTION_STRING: string =
  "mongodb+srv://bbaatarnya:3UDcI42R3XAatdNq@babysitter.lcdb9h6.mongodb.net/";

export const connectDb = async () => {
  try {
    set("strictQuery", false);
    await connect(CONNECTION_STRING),
      console.log("DB tei holbogdsoon huurhnuudee");
  } catch (error) {
    console.log("Db connect is unsuccessfully ");
  }
};
