import { model, Schema, models, Model } from "mongoose";

export type InfoModelType = {
    _id: Schema.Types.ObjectId;
    babysitter_id?: Schema.Types.ObjectId;
    driver_license?: boolean;
    has_children?: boolean;
    education?: string[];
    car?: boolean;
    smoker?: boolean;
    language?: string[];
    skills?: string[];
    year_of_experience?: number;
    character?: string[];
    rating?: number;
    available_time?: string[];
    wage?: number;
};

const InfoSchema = new Schema<InfoModelType>(
    {
        babysitter_id: { type: Schema.Types.ObjectId, ref: "Babysitter", required: true },
        driver_license: { type: Boolean, required: false },
        has_children: { type: Boolean, required: false },
        education: { type: [String], required: false },
        car: { type: Boolean, required: false },
        smoker: { type: Boolean, required: false },
        language: { type: [String], required: false },
        skills: { type: [String], required: false },
        year_of_experience: { type: Number, required: false },
        character: { type: [String], required: false },
        rating: { type: Number, required: false },
        available_time: { type: [String], required: false },
        wage: { type: Number, required: false },
    },
    {
        timestamps: true,
    }
);


export const InfoModel: Model<InfoModelType> =
    models["Info"] || model("Info", InfoSchema);