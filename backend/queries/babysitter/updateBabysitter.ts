import { Request } from "express";
import { BabysitterModel, InfoModel } from "../../db";
import { passwordHash, compareHash } from "../../utils";
import { getUserByEmail } from "../../utils";

export const updateParentQuery = async (req: Request) => {
  try {
    const { email, oldPassword, newName, newPhone, newPassword, address, about, gender, image, passport_id, driver_license, has_children, education, car, smoker, language, skills, year_of_experience, character, rating, available_time, wage } = req.body;

    const hash = passwordHash(newPassword);

    const babysitter = await BabysitterModel.findOne({email: email});

    if(!babysitter){
        throw new Error("Хэрэглэгч олдсонгүй");
    }

    const pass = babysitter?.password;
    const babaysitter_id = babysitter?._id;

    if(!pass){
        throw new Error("");
    }

    const checkPass = compareHash(oldPassword, pass)

    if(!checkPass){
        throw new Error("Password is wrong");
    }

    const updatedBabysitter = await BabysitterModel.findOneAndUpdate(
        { email: email },
        { $set: { password: hash,  name: newName, phone: newPhone, address: address, about: about, gender: gender, image: image, passport_id: passport_id} },
        { new: true }
    );

    

    const updatedInfo = await InfoModel.findOneAndUpdate(
        {babysitter_id: babaysitter_id},
        { $set: { password: hash,  name: newName, phone: newPhone, address: address, about: about, gender: gender, image: image, passport_id: passport_id} },
        { new: true }
    )



  } catch (error: any) {
    throw new Error(error.message);
  }
};
