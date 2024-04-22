import { Request } from "express";
import { ConversationModel } from "../../db";

export const updateConversQuery = async (req: Request) => {
  const { id, message } = req.body;
  const conversation = await ConversationModel.findOneAndUpdate(
    { _id: id },
    { $push: { messages: message } }
  );
  return conversation;
};
