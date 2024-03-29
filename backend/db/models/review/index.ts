import { model, Schema, models, Model } from "mongoose";

export type ReviewModelType = {
    _id: Schema.Types.ObjectId;
    point: number;
    description: string;
    parent_id?: Schema.Types.ObjectId;
    babysitter_id?: Schema.Types.ObjectId;
};

const ReviewSchema = new Schema<ReviewModelType>(
    {
        point: { type: Number, required: true },
        description: { type: String, required: true },
        parent_id: { type: Schema.Types.ObjectId, ref: "Parent", required: true },
        babysitter_id: {type: Schema.Types.ObjectId, ref: "Babysitter", required: true}
    },
    {
        timestamps: true,
    }
);

export const ReviewModel: Model<ReviewModelType> =
    models["Review"] || model("Review", ReviewSchema);