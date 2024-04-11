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
  console.log(req.body, "asd");

  try {
    let query = {};
    let asd = {};

    if (Object.keys(req.body).length > 0) {
      query = {
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
    }

    // Use the query in the find method
    const babysitters = await BabysitterModel.find().populate({
      path: "info_id",
      match: { ...query },
    });

    // Filter out babysitters with null info_id
    const filteredBabysitters = babysitters.filter(
      (babysitter) => babysitter.info_id !== null
    );

    return filteredBabysitters;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
