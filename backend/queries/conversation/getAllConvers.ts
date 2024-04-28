import { Request } from "express";
import { ConversationModel } from "../../db";

export const getAllConversQuery = async (req: Request) => {
  try {
    const conversations = await ConversationModel.find().populate(
      "messages babySitter parent"
    );

    return conversations;
  } catch (error: any) {
    console.error(error.message);
  }
};
