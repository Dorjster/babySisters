import { Request, Response } from "express";
import { compareHash, tokenGenerate } from "../../utils";
import { getUserByEmail } from "../../utils";

export const loginQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("Нэвтрэхээсээ өмнө бүртгүүлнэ үү");
  }

  const isPasswordTrue = await compareHash(password, user.password);

  if (!isPasswordTrue) {
    return "Нууц үгээ шалгаад дахин оролдоно уу";
  }

  const token = await tokenGenerate(user._id.toString());
  return token;
};
