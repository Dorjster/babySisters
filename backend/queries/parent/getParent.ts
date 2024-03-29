import { Request } from "express";
import { ParentModel } from "../../db";

export const getParentQuery = async (req: Request) => {
  try {

    const {email} = req.body;

    const parent = await ParentModel.findOne({email: email});

    return parent;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};
