import { Request } from "express";
import { BabysitterModel } from "../../db";
import { tokenGenerate } from "../../utils";

export const CreateBabysitterbyClerkQuieries = async (req: Request) => {
  const { name, email } = req.body;
  try {
    const newBabysitter = await BabysitterModel.create({
      name,
      email,
      auth: "google",
    });
    const token = await tokenGenerate(newBabysitter._id.toString());
    return token;
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      const existingUser = await BabysitterModel.findOne({ email: email });
      if (existingUser) {
        const token = await tokenGenerate(existingUser._id.toString());
        return token;
      }
    }
  }
};
