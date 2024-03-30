import { Request } from "express";
import { BabysitterModel, InfoModel } from "../../db";
import { passwordHash, getUserByEmail } from "../../utils";

export const createBabysitterQuery = async (req: Request) => {
  const { name, email, phone, password } = req.body;

  try {
    const hash = passwordHash(password);

    const isUserCreated = await getUserByEmail(email);

    if(isUserCreated){
      throw new Error("Бүртгэлтэй хэрэглэгч байна");
    }
    const info = await InfoModel.create({
      
    });

    const user = await BabysitterModel.create({
      name: name,
      email: email,
      phone: phone,
      password: hash,
      info_id: info._id
    });


    return user._id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
