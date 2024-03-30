import { Request, Response } from "express";
import { ParentModel } from "../../db";
import { passwordHash } from "../../utils";

export const createParentQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;

    const hash = passwordHash(password);

    const user = await ParentModel.create({
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
