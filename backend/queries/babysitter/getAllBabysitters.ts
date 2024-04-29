import { Request } from "express";
import { BabysitterModel } from "../../db";
import { loginFirst } from "../login";

interface Query {
  $or?: {
    [key: string]: any;
  }[];
}
interface Search {
  $or?: {
    [key: string]: any;
  }[];
}

export const getAllBabySittersQuery = async (req: Request) => {
  const {
    page = 1,
    pageSize = 6,
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
    gender = "",
  } = req.body;

  try {
    let query: Query = {};
    let search: Search = {};

    if (address || gender || verification) {
      search.$or = [];
      if (address) search.$or.push({ address });
      if (gender) search.$or.push({ gender });
      if (verification) search.$or.push({ verification });
    }

    if (
      minWage ||
      maxWage ||
      year_of_experience ||
      education ||
      character.length > 0 ||
      skills.length > 0 ||
      language.length > 0
    ) {
      query.$or = [
        { language: { $in: language } },
        { year_of_experience },
        { education },
        { character: { $in: character } },
        { skills: { $in: skills } },
        { wage: { $gte: minWage, $lte: maxWage } },
      ];
    }

    if (additional.length > 0) {
      query.$or = query.$or || [];

      if (additional.includes("hasCar")) query.$or.push({ car: true });
      if (additional.includes("driver"))
        query.$or.push({ driver_license: true });
      if (additional.includes("hasChildren"))
        query.$or.push({ has_children: true });
    }

    const totalCount = await BabysitterModel.countDocuments(search);
    const totalPages = Math.ceil(totalCount / pageSize);

    const babysitters = await BabysitterModel.find(search)
      .populate({
        path: "info_id",
        match: query,
      })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const filteredBabysitters = babysitters.filter(
      (babysitter) => babysitter.info_id !== null
    );

    return { filteredBabysitters, totalPages, totalCount };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
