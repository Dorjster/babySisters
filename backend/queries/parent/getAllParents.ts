import { Request } from "express";
import { ParentModel } from "../../db";

export const getAllParentsQuery = async (req: Request) => {
  try {


    const parents = await ParentModel.find();

    return parents;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};
