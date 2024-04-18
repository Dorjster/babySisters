import { Request } from "express";
import { ReviewModel, ParentModel, BabysitterModel } from "../../db";

export const createReviewQuery = async (req: Request) => {
  try {
    const { babysitter_id, parent_id, description } = req.body;

    // Retrieve parent data
    const parent = await ParentModel.findById(parent_id);

    if (!parent) {
      throw new Error("Parent not found");
    }

    const review = await ReviewModel.create({
      babysitter_id: babysitter_id,
      parent_id: parent, // Save the actual parent document
      // point: point,
      description: description,
    });

    // Update BabysitterModel to include the new review
    await BabysitterModel.findByIdAndUpdate(
      { _id: babysitter_id },
      {
        $addToSet: {
          review: review._id,
        },
      }
    );

    // Populate the parent field in the review with the actual parent data
    const populatedReview = await ReviewModel.find().populate("parent_id");

    if (!populatedReview) {
      throw new Error("Review population failed");
    }

    return populatedReview;
  } catch (error: any) {
    console.error("Error creating review:", error);
    throw new Error(error.message);
  }
};
