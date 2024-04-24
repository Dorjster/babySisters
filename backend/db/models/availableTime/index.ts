import { model, Schema, models, Model } from "mongoose";

export type AvailableModelType = {
  _id: Schema.Types.ObjectId;
  availables: {
    // weekday: string[];
    // from: Date[];
    // to: Date[];
    Даваа: {
      from: string;
      to: string;
    };
    Мягмар: {
      from: string;
      to: string;
    };
    Лхагва: {
      from: string;
      to: string;
    };
    Пүрэв: {
      from: string;
      to: string;
    };
    Баасан: {
      from: string;
      to: string;
    };
    Бямба: {
      from: string;
      to: string;
    };
    Ням: {
      from: string;
      to: string;
    };
  }[];
};

const TimeSchema = new Schema<AvailableModelType>({
  availables: [
    {
      // weekday: [{ type: String, required: true }],
      // from: [{ type: String, required: true }],
      // to: [{ type: String, required: true }],
      Даваа: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      Мягмар: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      Лхагва: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      Пүрэв: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      Баасан: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      Бямба: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
      Ням: {
        from: { type: String, required: false },
        to: { type: String, required: false },
      },
    },
  ],
});

export const AvailableModel: Model<AvailableModelType> =
  models["Available"] || model("Available", TimeSchema);
