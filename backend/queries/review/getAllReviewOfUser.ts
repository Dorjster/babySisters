import { Request } from "express";
import { ReviewModel, ParentModel, BabysitterModel } from "../../db";

export const getReviewsQuery = async (req: Request) => {
    try {
        const { babysitter_id } = req.body;


        // await BabysitterModel.findByIdAndUpdate(
        //     { _id: babysitter_id },
        //     {
        //         $set: {
        //             review: 
        //         }
        //     }
        // )


    } catch (error: any) {
        throw new Error(error.message);
    }
};
