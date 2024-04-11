import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { ParentModel, BabysitterModel, InfoModelType } from "../db";
import { InfoModel } from "../db";

export const passwordHash = (password: string) => {
  const salt = bcrypt.genSaltSync(1);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const compareHash = (password: string, hashedPassword: string) => {
  const isPasswordRight = bcrypt.compareSync(password, hashedPassword);
  return isPasswordRight;
};

export const tokenGenerate = async (userId: string) => {
  const token = await jwt.sign({ userId }, "defaultSecret", {
    expiresIn: "1d",
  });
  return token;
};

export const getUserByEmail = async (email: string) => {
  const user = await ParentModel.findOne({ email: email });

  if (!user) {
    const user1 = await BabysitterModel.findOne({ email: email });

    return user1;
  } else {
    return user;
  }
};
export const getUserById = async (id: string) => {
  const user = await ParentModel.findOne({ _id: id });

  if (!user) {
    const user1 = await BabysitterModel.findOne({ _id: id });
    return user1;
  } else {
    return user;
  }
};

export const transformDataForAlgolia = (infoData: InfoModelType): any => {
  const transformedData: any = {
    objectID: infoData._id.toString(),
    driver_license: infoData.driver_license,
    has_children: infoData.has_children,
    location: infoData.location,
    education: infoData.education,
    car: infoData.car,
    smoker: infoData.smoker,
    language: infoData.language,
    skills: infoData.skills,
    year_of_experience: infoData.year_of_experience,
    character: infoData.character,
    // rating: infoData.rating,
    available_time: infoData.available_time,
    wage: infoData.wage,
  };

  return transformedData;
};
