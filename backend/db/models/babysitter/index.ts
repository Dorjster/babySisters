import { model, Schema, models, Model } from "mongoose";

export type BabysitterModelType = {
    _id: Schema.Types.ObjectId;
    name: string;
    email: string;
    phone: string;
    password: string;
    address?: string;
    about?: string;
    gender?: boolean;
    image?: string;
    passport_id?: string;
    otp?: string;
};

const BabysitterSchema = new Schema<BabysitterModelType>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        address: { type: String, required: false },
        about: { type: String, required: false },
        gender: { type: Boolean, required: false },
        image: { type: String, required: false },
        passport_id: { type: String, required: false },
        otp: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

BabysitterSchema.index({ email: 1 }, { unique: true });

export const BabysitterModel: Model<BabysitterModelType> =
    models["Babysitter"] || model("Babysitter", BabysitterSchema);
