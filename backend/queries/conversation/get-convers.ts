import { Request } from "express";
import { ConversationModel } from "../../db";

export const getConversQuery = async (req: Request) => {
  const { id } = req.body;
  try {
    const conversation = await ConversationModel.findOne({
      roomId: id,
    }).populate("messages babySitter parent");

    console.log(conversation, "asd");

    return conversation;
  } catch (error: any) {
    console.error(error.message);
  }
};
