import { Request } from "express";
import { Types } from "mongoose";
import { BabysitterModel } from "../../db";

export const getBabysitterQuery = async (req: Request) => {
  try {
    const { id } = req.body;

    const babysitter_info = await BabysitterModel.aggregate([
      { $match: { _id: new Types.ObjectId(id) } },
      {
        $lookup: {
          from: "infos",
          foreignField: "_id",
          localField: "info_id",
          as: "info_id",
        },
      },
      {
        $lookup: {
          from: "reviews",
          localField: "review",
          foreignField: "_id",
          as: "review",
        },
      },
      {
        $lookup: {
          from: "parents",
          localField: "review.parent_id",
          foreignField: "_id",
          as: "parent_id",
        },
      },
      {
        $project: {
          _id: 1,
          role: 1,
          name: 1,
          email: 1,
          phone: 1,
          review: 1,
          info_id: 1,
          about: 1,
          parent_id: 1,
          address: 1,
          gender: 1,
        },
      },
    ]);

    if (!babysitter_info) {
      throw new Error("Хэрэглэгч олдсонгүй");
    }

    // const populatedBabysitterInfo = {
    //     babysitter: babysitter_info,
    //     info: babysitter_info.info_id,
    // };

    return babysitter_info;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
