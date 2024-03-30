import { Request } from "express";
import { ParentModel } from "../../db";
import { passwordHash, compareHash } from "../../utils";

export const updateParentQuery = async (req: Request) => {
    try {
        const {
            email,
            oldPassword,
            name,
            phone,
            newPassword,
            address,
            job_description,
            wage,
            available_time,
            image,
            passport_id,
        } = req.body;
        4;
        const { id } = req.params;

        const hash = passwordHash(newPassword);

        const parent = await ParentModel.findById({ id });
        const pass = parent?.password;

        if (!pass) {
            throw new Error("Not found");
        }

        const checkPass = compareHash(oldPassword, pass);

        if (!checkPass) {
            throw new Error("Password is wrong");
        }

        const updatedParent = await ParentModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    email,
                    password: hash,
                    name,
                    phone,
                    address,
                    job_description,
                    wage,
                    available_time,
                    image,
                    passport_id,
                },
            },
            { new: true }
        );

        return updatedParent;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
