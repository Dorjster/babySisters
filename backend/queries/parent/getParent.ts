import { Request } from "express";
import { ParentModel } from "../../db";

export const getParentQuery = async (req: Request) => {
  try {

    const { id } = req.body;
    
    console.log(id);
    

    const parent = await ParentModel.findById({id});

    return parent;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};
