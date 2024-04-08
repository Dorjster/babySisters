import { model, Schema, models, Model } from "mongoose";

const ROLE = "BabySitter";

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
  verifyCode?: string;
  review?: string[];
  otp?: string;
  info_id: Schema.Types.ObjectId;
  role: string;
};

const BabysitterSchema = new Schema<BabysitterModelType>(
  {
    role: { type: String, default: ROLE },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    about: { type: String, required: false },
    gender: { type: Boolean, required: false },
    image: { type: String, required: false },
    verifyCode: { type: String },
    review: [{ type: Schema.Types.ObjectId, required: false, ref: "Review" }],
    otp: { type: String, required: false },
    info_id: { type: Schema.Types.ObjectId, ref: "Info", required: true },
  },
  {
    timestamps: true,
  }
);

BabysitterSchema.index({ email: 1 }, { unique: true });

export const BabysitterModel: Model<BabysitterModelType> =
  models["Babysitter"] || model("Babysitter", BabysitterSchema);
