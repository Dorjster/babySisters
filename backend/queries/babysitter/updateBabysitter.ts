import { Request } from "express";
import { BabysitterModel, InfoModel } from "../../db";
import { passwordHash, compareHash } from "../../utils";

export const updateBabysitterQuery = async (req: Request) => {
    try {
        const {
            id,
            oldPassword,
            email,
            name,
            phone,
            newPassword,
            address,
            about,
            gender,
            image,
            verification,
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


        const hash = passwordHash(newPassword);

        const babysitter = await BabysitterModel.findById({_id: id});

        if (!babysitter) {
            throw new Error("Хэрэглэгч олдсонгүй");
        }
        const pass = babysitter?.password;

        const checkPass = compareHash(oldPassword, pass);

        if (!checkPass) {
            throw new Error("Нууц үгээ шалгаад дахин оролдоно уу");
        }

        const updatedBabysitter = await BabysitterModel.findOneAndUpdate(
            { email: email },
            {
                $set: {
                    email: email,
                    password: hash,
                    name: name,
                    phone: phone,
                    address: address,
                    about: about,
                    gender: gender,
                    image: image,
                    verification: verification
                },
            },
            { new: true }
        );

        const info_id = babysitter?.info_id;

        const updatedInfo = await InfoModel.findByIdAndUpdate(
            { _id: info_id },
            {
                $set: {
                    driver_license: driver_license,
                    has_children: has_children,
                    education: education,
                    car: car,
                    smoker: smoker,
                    language: language,
                    skills: skills,
                    year_of_experience: year_of_experience,
                    character: character,
                    rating: rating,
                    available_time: available_time,
                    wage: wage
                },
            },
            { new: true }
        );


        const populatedBabysitterInfo = {
            babysitter: updatedBabysitter,
            info: updatedInfo 
        };


        if (updatedInfo && updatedBabysitter) { 
            return populatedBabysitterInfo
        }
    
    } catch (error: any) {
        throw new Error(error.message);
    }
};
