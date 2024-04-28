import { model, Schema, models, Model } from "mongoose";

export type MessageModelType = {
  // [x: string]: any;
  _id: Schema.Types.ObjectId;
  author: string;
  // senderId: Schema.Types.ObjectId;
  // receiverId: Schema.Types.ObjectId;
  message: string;
  time: string;
};

const MessageSchema = new Schema<MessageModelType>({
  // senderId: { type: Schema.Types.ObjectId, ref: "Parent" },
  // receiverId: { type: Schema.Types.ObjectId, ref: "Babysitter" },
  author: { type: String, required: true },
  message: { type: String, required: true },
  time: {
    type: String,
    required: true,
  },
});

export const MessageModel: Model<MessageModelType> =
  models["Message"] || model("Message", MessageSchema);
