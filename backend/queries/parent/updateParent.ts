import { Request } from "express";
import { ParentModel } from "../../db";
import { passwordHash, compareHash } from "../../utils";


export const updateParentQuery = async (req: Request) => {
  try {
    const { email, oldPassword, newName, newPhone, newPassword, address, job_description, wage, available_time, image, passport_id } = req.body;

    const hash = passwordHash(newPassword);

    const parent = await ParentModel.findOne({email: email});
    const pass = parent?.password;

    if(!pass){
        throw new Error("Not found");
    }

    const checkPass = compareHash(oldPassword, pass)

    if(!checkPass){
        throw new Error("Password is wrong");
    }

    const updatedParent = await ParentModel.findOneAndUpdate(
        { email: email },
        { $set: { password: hash, name: newName, phone: newPhone, address: address, job_description: job_description, wage: wage, available_time: available_time, image: image, passport_id: passport_id } },
        { new: true }
    );

    return updatedParent;


  } catch (error: any) {
    throw new Error(error.message);
  }
};
