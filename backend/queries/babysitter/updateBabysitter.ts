import { Request } from "express";
import { BabysitterModel, InfoModel } from "../../db";
import { passwordHash, compareHash } from "../../utils";

export const updateBabysitterQuery = async (req: Request) => {
    try {
        const {
            oldPassword,
            email,
            name,
            phone,
            newPassword,
            address,
            about,
            gender,
            image,
            passport_id,
            driver_license,
            has_children,
            education,
            car,
            smoker,
            language,
            skills,
            year_of_experience,
            character,
            rating,
            available_time,
            wage
        } = req.body;

        const { id } = req.params;

        const hash = passwordHash(newPassword);

        const babysitter = await BabysitterModel.findById({id});

        const pass = babysitter?.password;

        if (!pass) {
            throw new Error("Хэрэглэгч олдсонгүй");
        }

        const checkPass = compareHash(oldPassword, pass);

        if (!checkPass) {
            throw new Error("Нууц үгээ шалгаад дахин оролдоно уу");
        }

        const updatedBabysitter = await BabysitterModel.findOneAndUpdate(
            { email: email },
            {
                $set: {
                    email,
                    password: hash,
                    name,
                    phone,
                    address,
                    about,
                    gender,
                    image,
                    passport_id
                },
            },
            { new: true }
        );

        const info_id = babysitter.info_id;

        const updatedInfo = await InfoModel.findOneAndUpdate(
            { _id: info_id },
            {
                $set: {
                    driver_license,
                    has_children,
                    education,
                    car,
                    smoker,
                    language,
                    skills,
                    year_of_experience,
                    character,
                    rating,
                    available_time,
                    wage,
                },
            },
            { new: true }
        );


        if (updatedInfo && updatedBabysitter) { 
            return updatedInfo && updatedBabysitter
        }
    
    } catch (error: any) {
        throw new Error(error.message);
    }
};
