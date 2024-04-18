import { Request } from "express";
import { Types } from "mongoose";
import { BabysitterModel } from "../../db";
import { AvailableModel } from "../../db";

export const getBabysitterQuery = async (req: Request) => {
  try {
    const { id } = req.body;

    const babysitter_info = await BabysitterModel.findById({
      _id: id,
    })
      .populate({
        path: "review",
        populate: {
          path: "parent_id",
        },
      })
      .populate("info_id");
    // .populate("babysitter_id");

    if (!babysitter_info) {
      throw new Error("Хэрэглэгч олдсонгүй");
    }

    return babysitter_info;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
