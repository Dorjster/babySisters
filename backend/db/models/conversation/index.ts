import { model, Schema, models, Model } from "mongoose";

export type ConversationModelType = {
  _id: Schema.Types.ObjectId;
  participants: object;
  messages: string[];
};

const ConversationSchema = new Schema<ConversationModelType>(
  {
    participants: {
      babySitter: { type: Schema.Types.ObjectId, ref: "Babysitter" },
      parent: { type: Schema.Types.ObjectId, ref: "Parent" },
    },
    messages: [{ type: Schema.Types.ObjectId, ref: "Message", default: [] }],
  },
  {
    timestamps: true,
  }
);

export const ConversationModel: Model<ConversationModelType> =
  models["Conversation"] || model("Conversation", ConversationSchema);
