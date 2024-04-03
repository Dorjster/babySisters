import { Request } from "express";
import { ParentModel } from "../../db";
import { passwordHash, compareHash } from "../../utils";

export const updateParentQuery = async (req: Request) => {
    try {
        const {
            id,
            email,
            oldPassword,
            name,
            phone,
            newPassword,
            address,
            job_description,
            wage,
            number_of_children,
            age_of_children,
            available_time,
            image,
            passport_id,
        } = req.body;


        const hash = passwordHash(newPassword);

        const parent = await ParentModel.findById({ _id: id });
        const pass = parent?.password;

        if (!pass) {
            throw new Error("Хэрэглэгч олдсонгүй");
        }

        const checkPass = compareHash(oldPassword, pass);

        if (!checkPass) {
            throw new Error("Нууц үгээ шалгаад дахин оролдоно уу");
        }

        const updatedParent = await ParentModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    email: email,
                    password: hash,
                    name: name,
                    phone: phone,
                    address: address,
                    job_description: job_description,
                    wage: wage,
                    number_of_children: number_of_children,
                    age_of_children: age_of_children,
                    available_time: available_time,
                    image: image,
                    passport_id: passport_id,
                
                },
            },
            { new: true }
        );

        return updatedParent;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
