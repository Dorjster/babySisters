import { model, Schema, models, Model } from "mongoose";

const ROLE = "Parent";

export type ParentModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  password: string;
  address?: string;
  job_description?: string;
  wage?: string;
  available_time?: object[];
  number_of_children?: string[];
  age_of_children?: string[];
  image?: string;
  verification: boolean;
  verifyCode?: string;
  otp?: string;
  role: string;
};

const ParentSchema = new Schema<ParentModelType>(
  {
    role: { type: String, default: ROLE },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    job_description: { type: String, required: false },
    wage: { type: String, required: false },
    available_time: { type: [Object], required: false },
    number_of_children: { type: [String], required: false },
    age_of_children: { type: [String], required: false },
    image: { type: String, required: false },
    verification: { type: Boolean, default: false },
    verifyCode: { type: String },
    otp: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

ParentSchema.index({ email: 1 }, { unique: true });

export const ParentModel: Model<ParentModelType> =
  models["Parent"] || model("Parent", ParentSchema);
