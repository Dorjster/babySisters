import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { ParentModel, BabysitterModel } from "../db";

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
    expiresIn: "1h",
  });
  return token;
};
export const getUserByEmail = async (email: string) => {
  const user = await ParentModel.findOne({ email: email });
  console.log(user, "parent");
  
  if (!user) {
    const user1 = await BabysitterModel.findOne({ email: email });
    
    
    return user1;
  } else return user;
};