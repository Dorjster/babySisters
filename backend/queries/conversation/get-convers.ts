import { Request } from "express";
import { ConversationModel } from "../../db";

export const getConversQuery = async (req: Request) => {
  const { id } = req.body;
  const conversation = await ConversationModel.findOne({ id }).populate(
    "message"
  );
  return conversation;
};
