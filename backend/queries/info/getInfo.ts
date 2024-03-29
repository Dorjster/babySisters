import { Request, Response } from "express";
import { BabysitterModel, InfoModel } from "../../db";



export const getInfoQuery = async (req: Request) => {
  const { email } = req.body;

  try {

    const babysitter = await BabysitterModel.findOne({email: email})

    if(!babysitter){
        throw new Error("user not found")
    }

    const babysitter_id = babysitter._id;

    const info = await InfoModel.findOne({ babysitter_id: babysitter_id });

    return(info);

  } catch (error: any) {
    throw new Error(error.message);
  }
};
