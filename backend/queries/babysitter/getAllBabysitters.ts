import { Request } from "express";
import { BabysitterModel } from "../../db";

export const getAllBabySittersQuery = async (req: Request) => {
  try {
    const babysitters = await BabysitterModel.find()
    .populate("info_id");

    if (babysitters === null) {
      throw new Error("Бүртгэлтэй хэрэглэгч олдсонгүй");
    }

    return babysitters;

    
  } catch (error: any) {
    throw new Error(error.message);
  }
};
