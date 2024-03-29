import { Request } from "express";
import { BabysitterModel } from "../../db";

export const getBabySitterQuery = async (req: Request) => {
  try {

    const {email} = req.body;

    const parent = await BabysitterModel.findOne({email: email});

    return parent;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};