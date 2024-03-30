import { Request } from "express";
import { BabysitterModel } from "../../db";

export const getAllBabySittersQuery = async (req: Request) => {
  try {

    const babysitters = await BabysitterModel.find();

    return babysitters;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};