import { Request } from "express";
import { ReviewModel, ParentModel, BabysitterModel } from "../../db";

export const createReviewQuery = async (req: Request) => {
    try {
        const { babysitter_id, parent_id, point, description } = req.body;

        const review = await ReviewModel.create({ babysitter_id: babysitter_id, parent_id: parent_id, point: point, description: description });

        // await BabysitterModel.findByIdAndUpdate(
        //     { _id: babysitter_id },
        //     {
        //         $set: {
        //             review: 
        //         }
        //     }
        // )

        return review;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
