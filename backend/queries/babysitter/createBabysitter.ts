import { Request, Response } from "express";
import { BabysitterModel } from "../../db";
import { passwordHash } from "../../utils";

export const createBabysitterQuery = async (req: Request) => {
  const { name, email, phone, password } = req.body;

  try {
    const hash = passwordHash(password);

    const user = await BabysitterModel.create({
      name,
      email,
      phone,
      password: hash,
    });

    return user._id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
