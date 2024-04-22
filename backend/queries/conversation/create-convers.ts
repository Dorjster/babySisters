import { Request } from "express";
import { ConversationModel } from "../../db";

export const createConversQuery = async (req: Request) => {
  const { senderId, receiverId } = req.body;
  try {
    const convers = await ConversationModel.create({
      participants: {
        babySitter: senderId,
        parent: receiverId,
      },
    });
    return convers;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
