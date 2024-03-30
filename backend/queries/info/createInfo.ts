import { Request, Response } from "express";
import { BabysitterModel, InfoModel } from "../../db";
import { passwordHash } from "../../utils";


export const createInfoQuery = async (req: Request) => {
  const { email, driver_license, education, car, smoker, language, skills, year_of_experience, character, rating, available_time, wage } = req.body;

  try {

    const babysitter = await BabysitterModel.findOne({email: email})

    if(!babysitter){
        throw new Error("user not found")
    }

    const babysitter_id = babysitter._id;

    const info = await InfoModel.create({
        babysitter_id: babysitter_id,
        driver_license,
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
    });

    return(info);

  } catch (error: any) {
    throw new Error(error.message);
  }
};

