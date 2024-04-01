import { Request, Response } from "express";
import { compareHash, tokenGenerate, getUserByEmail } from "../../utils";


export const loginQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
<<<<<<< HEAD
    return "Нэвтрэхээсээ өмнө бүртгүүлнэ үү";
=======
    return("Нэвтрэхээсээ өмнө бүртгүүлнэ үү");
>>>>>>> 4c6e5c3 (crud jaaahaaan uur)
  }

  const isPasswordTrue = await compareHash(password, user.password);

  if (!isPasswordTrue) {
    return "Нууц үгээ эсвэл майл ээ шалгаад дахин оролдоно уу";
  }

  const token = await tokenGenerate(user._id.toString());
  

  return token;
};
