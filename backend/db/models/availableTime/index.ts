import { model, Schema, models, Model } from "mongoose";

export type AvailableModelType = [
  {
    _id: Schema.Types.ObjectId;
    togle: boolean;
    monday: {
      from: string;
      to: string;
    };
    tuesday: {
      from: string;
      to: string;
    };
    wednesday: {
      from: string;
      to: string;
    };
    thursday: {
      from: string;
      to: string;
    };
    friday: {
      from: string;
      to: string;
    };
    saturday: {
      from: string;
      to: string;
    };
    sunday: {
      from: string;
      to: string;
    };
    // parent_id?: Schema.Types.ObjectId;
    // babysitter_id?: Schema.Types.ObjectId;
  }
];

const TimeSchema = new Schema<AvailableModelType>(
  [
    {
      monday: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      tuesday: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      wednesday: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      thursday: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      friday: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      saturday: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      sunday: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      // parent_id: { type: Schema.Types.ObjectId, ref: "Parent", required: false },
      // babysitter_id: {
      //   type: Schema.Types.ObjectId,
      //   ref: "Babysitter",
      //   required: false,
      // },
      togle: { type: Boolean, required: false, default: true },
    },
  ],
  {
    timestamps: true,
  }
);

export const AvailableModel: Model<AvailableModelType> =
  models["Available"] || model("Available", TimeSchema);
