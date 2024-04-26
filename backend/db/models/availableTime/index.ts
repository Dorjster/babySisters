import { model, Schema, models, Model } from "mongoose";

export type AvailableModelType = {
  _id: Schema.Types.ObjectId;
  availables: {
    weekday: string;
    from: string;
    to: string;
  }[];
};

const TimeSchema = new Schema<AvailableModelType>({
  availables: [
    {
      weekday: { type: String, required: false },
      from: { type: String, required: false },
      to: { type: String, required: false },
    },
  ],
});

export const AvailableModel: Model<AvailableModelType> =
  models["Available"] || model("Available", TimeSchema);
