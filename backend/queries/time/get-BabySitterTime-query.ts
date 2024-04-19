import { Request } from "express";
import { Types } from "mongoose";
import { AvailableModel } from "../../db";

export const getBabysitterTimeQuery = async (req: Request) => {
  try {
    const { id } = req.body;

    const babysitterTime_info = await AvailableModel.findById({
      _id: id,
    }).populate({
      path: "babysitter_id",
    });

    if (!babysitterTime_info) {
      throw new Error("Хэрэглэгч олдсонгүй");
    }

    return babysitterTime_info;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
