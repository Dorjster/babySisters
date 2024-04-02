import { Request, Response } from "express";
import { compareHash, tokenGenerate } from "../../utils";
import { getUserByEmail } from "../../utils";

export const loginQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (email === "" || password === "") {
    throw new Error("И-майл эсвэл нууц үг хоосон байна.");
  }
  if (!user) {
    throw new Error("Бүртгэлтэй хэрэглэгч олдсонгүй.");
  }

  const isPasswordTrue = await compareHash(password, user.password);

  if (!isPasswordTrue) {
    throw new Error("Нууц үгээ эсвэл майл ээ шалгаад дахин оролдоно уу");
  }

  const token = await tokenGenerate(user._id.toString());
  return token;
};
