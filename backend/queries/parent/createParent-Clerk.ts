import { Request } from "express";
import { ParentModel } from "../../db";
import { tokenGenerate } from "../../utils";

export const CreateParentbyClerkQueries = async (req: Request) => {
  const { name, email } = req.body;
  try {
    const newParent = await ParentModel.create({
      name,
      email,
      auth: "google",
    });
    const token = await tokenGenerate(newParent._id.toString());
    return token;
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      const existingUser = await ParentModel.findOne({ email: email });
      if (existingUser) {
        const token = await tokenGenerate(existingUser._id.toString());
        return token;
      }
    }
  }
};
