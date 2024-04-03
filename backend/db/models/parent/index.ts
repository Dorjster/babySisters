import { model, Schema, models, Model } from "mongoose";

export type ParentModelType = {
    _id: Schema.Types.ObjectId;
    name: string;
    email: string;
    phone: string;
    password: string;
    address?: string;
    job_description?: string;
    wage?: number;
    number_of_children?: string;
    age_of_children?: string[];
    available_time?: object[];
    image?: string;
    passport_id?: string;
    otp?: string;
};

const ParentSchema = new Schema<ParentModelType>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        address: { type: String, required: false },
        job_description: { type: String, required: false },
        wage: { type: Number, required: false },
        number_of_children: {type: String, required: false},
        age_of_children: {type: String, required: false},
        available_time: { type: [Object], required: false },
        image: { type: String, required: false },
        passport_id: { type: String, required: false },
        otp: { type: String, required: false },
    },
    { 
        timestamps: true,
    }
);

ParentSchema.index({ email: 1 }, { unique: true });

export const ParentModel: Model<ParentModelType> =
    models["Parent"] || model("Parent", ParentSchema);