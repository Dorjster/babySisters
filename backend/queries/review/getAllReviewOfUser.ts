import { Request } from "express";
import { ReviewModel, ParentModel, BabysitterModel } from "../../db";


const getReviewById = async (item: string) => {
    const review = await ReviewModel.findById({ _id: item });
    return review
}
export const getReviewsQuery = async (req: Request) => {
    try {
        const { babysitter_id } = req.body;


        const babysitter = await BabysitterModel.findById(
            { _id: babysitter_id },
        ).populate("review")


        if (!babysitter) {
            throw new Error("babysitter not found");
        }
        // console.log(babysitter); 

        
        return babysitter;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
