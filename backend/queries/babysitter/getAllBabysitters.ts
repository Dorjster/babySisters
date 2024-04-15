import { Request } from "express";
import { BabysitterModel } from "../../db";

export const getAllBabySittersQuery = async (req: Request) => {
  const {
    minWage = "",
    maxWage = "",
    year_of_experience = "",
    education = "",
    character = [],
    additional = [],
    skills = [],
    language = [],
    address = "",
  } = req.body;

  try {
    if (
      !minWage &&
      !maxWage &&
      !year_of_experience &&
      !education &&
      character.length === 0 &&
      additional.length === 0 &&
      skills.length === 0 &&
      language.length === 0 &&
      !address
    ) {
      const allBabysitters = await BabysitterModel.find().populate("info_id");
      return allBabysitters.filter((babysitter) => babysitter.info_id !== null);
    }

    let query = {
      $or: [
        { year_of_experience: year_of_experience },
        { education: education },
        { character: { $in: character } },
        { skills: { $in: skills } },
        { language: { $in: language } },
        { wage: { $gte: minWage, $lte: maxWage } },
        // { car: additional.includes("hasCar") },
        // { driver_license: additional.includes("driver") },
        // { has_children: additional.includes("hasChildren") },
        // { smoker: additional.includes("nonSmoker") },
      ],
    };

    const babysitters = await BabysitterModel.find().populate({
      path: "info_id",
      match: { ...query },
    });

    const filteredBabysitters = babysitters.filter(
      (babysitter) => babysitter.info_id !== null
    );

    return filteredBabysitters;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
