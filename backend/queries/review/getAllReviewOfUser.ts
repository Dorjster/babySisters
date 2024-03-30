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
        )

        const reviewArray = babysitter?.review;

        if (!reviewArray) {
            throw new Error("asd");
            
        }

        const array: any = [];
        
        const arrayy = await Promise.all(reviewArray.map(async (item: string) => {
            
            
        
            const reviewInfo = await ReviewModel.findById({ _id: item });

            array.push(reviewInfo)
            // console.log( reviewInfo);
            

            
        }));
        
        return arrayy;

        
        


    } catch (error: any) {
        throw new Error(error.message);
    }
};
