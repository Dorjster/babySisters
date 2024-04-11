import { model, Schema, models, Model } from "mongoose";

export type InfoModelType = {
  _id: Schema.Types.ObjectId;
  // babysitter_id: Schema.Types.ObjectId;
  driver_license?: boolean;
  has_children?: boolean;
  location?: string;
  education?: string;
  car?: boolean;
  smoker?: boolean;
  language?: string[];
  skills?: string[];
  year_of_experience?: string;
  character?: string[];
  rating?: number;
  available_time?: object[];
  wage?: number;
};

const InfoSchema = new Schema<InfoModelType>(
  {
    driver_license: { type: Boolean, required: false },
    // babysitter_id: { type: Schema.Types.ObjectId, required: true},
    has_children: { type: Boolean, required: false },
    education: { type: String, required: false },
    car: { type: Boolean, required: false },
    smoker: { type: Boolean, required: false },
    language: { type: [String], required: false },
    skills: { type: [String], required: false },
    year_of_experience: { type: String, required: false },
    character: { type: [String], required: false },
    rating: { type: Number, required: false },
    available_time: { type: [Object], required: false },
    wage: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

export const InfoModel: Model<InfoModelType> =
  models["Info"] || model("Info", InfoSchema);
