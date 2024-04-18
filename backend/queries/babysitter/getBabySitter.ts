import { Request } from "express";
import { Types } from "mongoose";
import { BabysitterModel } from "../../db";

export const getBabysitterQuery = async (req: Request) => {
  try {
    const { id } = req.body;

    // const babysitter_info = await BabysitterModel.aggregate([
    //   {
    //     $match: { _id: new Types.ObjectId(id) },
    //   },
    //   {
    //     $lookup: {
    //       from: "infos",
    //       foreignField: "_id",
    //       localField: "info_id",
    //       as: "info",
    //     },
    //   },
    //   {
    //     $unwind: "$info",
    //   },
    //   {
    //     $lookup: {
    //       from: "reviews",
    //       localField: "review",
    //       foreignField: "_id",
    //       as: "reviews",
    //     },
    //   },
    //   {
    //     $unwind: {
    //       path: "$reviews",
    //       preserveNullAndEmptyArrays: true,
    //     },
    //   },
    //   {
    //     $lookup: {
    //       from: "parents",
    //       localField: "reviews.parent_id",
    //       foreignField: "_id",
    //       as: "parent",
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: "$_id",
    //       info: { $first: "$info" },
    //       originalData: { $first: "$$ROOT" }, // Store original data
    //       reviews: {
    //         $push: {
    //           _id: "$reviews._id",
    //           // Include other fields from reviews
    //           review_field_1: "$reviews.review_field_1",
    //           review_field_2: "$reviews.review_field_2",
    //           parent: { $first: "$parent" }, // Assuming there's only one parent per review
    //         },
    //       },
    //     },
    //   },
    //   {
    //     $replaceRoot: {
    //       newRoot: {
    //         $mergeObjects: ["$originalData", { reviews: "$reviews" }], // Merge original data with reviews
    //       },
    //     },
    //   },
    //   {
    //     $project: {
    //       originalData: 0, // Exclude the originalData field
    //     },
    //   },
    // ]);

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

    if (!babysitter_info) {
      throw new Error("Хэрэглэгч олдсонгүй");
    }

    return babysitter_info;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
