import { model, Schema, models, Model } from "mongoose";

export type ConversationModelType = {
  _id: Schema.Types.ObjectId;
  // participants: object;
  babySitter: Schema.Types.ObjectId;
  parent: Schema.Types.ObjectId;

  messages: string[];
  roomId: string;
};

const ConversationSchema = new Schema<ConversationModelType>(
  {
    babySitter: { type: Schema.Types.ObjectId, ref: "Babysitter" },
    parent: { type: Schema.Types.ObjectId, ref: "Parent" },

    roomId: { type: String, required: true },
    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  },
  {
    timestamps: true,
  }
);

export const ConversationModel: Model<ConversationModelType> =
  models["Conversation"] || model("Conversation", ConversationSchema);
