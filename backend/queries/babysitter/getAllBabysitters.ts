import { Request } from "express";
import { BabysitterModel } from "../../db";
import { loginFirst } from "../login";

interface Query {
  $or?: {
    [key: string]: any;
  }[];
}

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
    verification = "",
  } = req.body;

  try {
    let query: Query = {};
    let search = {};

    if (address) {
      search = {
        $or: [{ address: address }],
      };
    }
    console.log(search);

    if (
      minWage ||
      maxWage ||
      year_of_experience ||
      education ||
      character.length > 0 ||
      skills.length > 0 ||
      language.length > 0
    ) {
      query = {
        $or: [
          { language: { $in: language } },
          { year_of_experience: year_of_experience },
          { education: education },
          { character: { $in: character } },
          { skills: { $in: skills } },
          { wage: { $gte: minWage, $lte: maxWage } },
        ],
      };
    }

    if (additional.length > 0) {
      query["$or"] = query["$or"] || [];
      query["$or"].push(
        { car: additional?.includes("hasCar") },
        { driver_license: additional?.includes("driver") },
        { has_children: additional?.includes("hasChildren") }
        // { smoker: additional?.includes("nonSmoker") }
      );
    }

    // console.log("Constructed query:", query, search);

    const babysitters = await BabysitterModel.find(search).populate({
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
