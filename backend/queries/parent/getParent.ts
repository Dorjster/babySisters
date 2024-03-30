import { Request } from "express";
import { ParentModel } from "../../db";

export const getParentQuery = async (req: Request) => {
  try {

    const { id } = req.params;

    const parent = await ParentModel.findById({_id: id});

    return parent;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};
