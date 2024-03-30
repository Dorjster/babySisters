import { Request } from "express";
import { ParentModel } from "../../db";
import { passwordHash, getUserByEmail } from "../../utils";

export const createParentQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;

    const hash = passwordHash(password);

    const isUserCreated = await getUserByEmail(email);

    if(isUserCreated){
      throw new Error("Бүртгэлтэй хэрэглэгч байна");
    }

    const user = await ParentModel.create({
      name: name,
      email: email,
      phone: phone,
      password: hash,
    });

    return user._id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
