import { Request } from "express";
import { getUserByEmail } from "../../utils";

export const codeCheckerQuery = async (req: Request) => {
  const { email, OTP } = req.body;
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("Хэрэглэгч олдсонгүй");
  }

  if (user.otp === OTP) {
    return "Нууц үг зөв байна";
  } else {
    throw new Error("Нууц үг буруу байна");
  }
};
