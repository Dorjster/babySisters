import jwt from "jsonwebtoken";
import { BabysitterModel, ParentModel } from "../../db";
import { Request, Response } from "express";

type DecodedType = {
  userId: string;
  iat: number;
  exp: number;
};

// Get LoggedIn User
export const getLoggedInUser = async (req: Request) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] as string;

    if (!token) {
      console.log("Not logged in");
      return;
    }

    const decoded = jwt.verify(token, "defaultSecret") as unknown;

    const id = decoded as DecodedType;

    // console.log(id._id);

    const getUserById = async (id: string) => {
      const user = await BabysitterModel.findOne({ _id: id });
      if (!user) {
        const user1 = await ParentModel.findOne({ _id: id });
        return user1;
      }
      return user;
    };

    const user = await getUserById(id.userId);

    if (!user) throw new Error("User not found");

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
