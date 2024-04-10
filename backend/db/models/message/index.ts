import { model, Schema, models, Model } from "mongoose";

export type MessageModelType = {
  [x: string]: any;
  _id: Schema.Types.ObjectId;
  senderId: Schema.Types.ObjectId;
  receiverId: Schema.Types.ObjectId;
  message: string;
};

const MessageSchema = new Schema<MessageModelType>(
  {
    senderId: { type: Schema.Types.ObjectId, ref: "Parent" },
    receiverId: { type: Schema.Types.ObjectId, ref: "Babysitter"},
    message: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

export const MessageModel: Model<MessageModelType> =
  models["Message"] || model("Message", MessageSchema);
