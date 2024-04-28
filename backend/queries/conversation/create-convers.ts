import { Request } from "express";
import { ConversationModel } from "../../db";

export const createConversQuery = async (req: Request) => {
  const { senderId, recieverId } = req.body;

  try {
    const existingConversation = await ConversationModel.findOne({
      $or: [
        { babySitter: senderId, parent: recieverId },
        { parent: senderId, babySitter: recieverId },
      ],
    });

    console.log(existingConversation);

    if (existingConversation) {
      return existingConversation;
    } else {
      const roomId = generateMathRandomRoomId();

      const newConversation = await ConversationModel.create({
        roomId,

        babySitter: recieverId,
        parent: senderId,
      });
      return newConversation;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

function generateMathRandomRoomId(): string {
  const randomNum = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  return randomNum.toString();
}
