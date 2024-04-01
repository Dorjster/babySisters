import { Request, Response } from "express";
import { getUserByEmail } from "../../utils";

export const loginFirst = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("hereglegch oldsongui");
  }

  return user;
};
