import { Request, Response } from "express";
import { compareHash, tokenGenerate } from "../../utils";
import { getUserByEmail } from "../../utils";

export const loginQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return "Нэвтрэхээсээ өмнө бүртгүүлнэ үү";
  }

  const isPasswordTrue = await compareHash(password, user.password);

  if (!isPasswordTrue) {
    return "Нууц үгээ эсвэл майл ээ шалгаад дахин оролдоно уу";
  }

  const token = await tokenGenerate(user._id.toString());
  return token;
};
