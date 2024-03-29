import { Request, Response } from "express";
import { ParentModel, BabysitterModel } from "../../db";
import { compareHash, tokenGenerate } from "../../utils";
import { getUserByEmail } from "../../utils";

export const loginQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordTrue = await compareHash(password, user.password);

  if (!isPasswordTrue) {
    return "Wrong Email or Password";
  }

  const token = await tokenGenerate(user._id.toString());
  return token;
};
