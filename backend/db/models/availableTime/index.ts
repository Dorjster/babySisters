import { model, Schema, models, Model } from "mongoose";

export type AvailableModelType = [
  {
    _id: Schema.Types.ObjectId;
    monday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    tuesday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    wednesday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    thursday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    friday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    saturday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    sunday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
  }
];

const TimeSchema = new Schema<AvailableModelType>(
  [
    {
      monday: {
        from: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        to: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        togle: { type: Boolean, required: false, default: true },
      },
      tuesday: {
        from: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        to: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        togle: { type: Boolean, required: false, default: true },
      },
      wednesday: {
        from: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        to: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        togle: { type: Boolean, required: false, default: true },
      },
      thursday: {
        from: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        to: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        togle: { type: Boolean, required: false, default: true },
      },
      friday: {
        from: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        to: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        togle: { type: Boolean, required: false, default: true },
      },
      saturday: {
        from: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        to: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        togle: { type: Boolean, required: false, default: true },
      },
      sunday: {
        from: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        to: [
          { clock: { type: String, required: false } },
          { AM: { type: String, required: false } },
          { PM: { type: String, required: false } },
        ],
        togle: { type: Boolean, required: false, default: true },
      },
    },
  ],
  {
    timestamps: true,
  }
);

export const AvailableModel: Model<AvailableModelType> =
  models["Available"] || model("Available", TimeSchema);
