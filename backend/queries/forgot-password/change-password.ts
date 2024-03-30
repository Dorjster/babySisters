import { Request } from "express";
import { passwordHash } from "../../utils";
import { ParentModel } from "../../db";
import { BabysitterModel } from "../../db";
import { getUserByEmail } from "../../utils";

export const changePasswordQuery = async (req: Request) => {
  const { password, email } = req.body;

  const user = await getUserByEmail(email);

  if(!user){
    throw new Error("Хэрэглэгч олдсонгүй"); 
  }

  const newPassword = await passwordHash(password);

  await ParentModel.findOneAndUpdate(
    { email: email },
    { $set: { password: newPassword } },
    { new: true }
  );
  
  await BabysitterModel.findOneAndUpdate(
    { email: email },
    { $set: { password: newPassword } },
    { new: true }
  );
  return "Нууц үг амжилттай шинэчлэгдлээ";
};
