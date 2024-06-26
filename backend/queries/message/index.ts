import { Request, Response } from "express";
import { ConversationModel, MessageModel, MessageModelType } from "../../db";

// export const sendMessageQuery = async (req: Request) => {
//   try {
//     const { message, senderId } = req.body;
//     const { id: receiverId } = req.params;

//     let conversation = await ConversationModel.findOne({
//       participants: { $all: [senderId, receiverId] },
//     });

//     if (!conversation) {
//       conversation = await ConversationModel.create({
//         participants: [senderId, receiverId],
//       });
//     }

//     const newMessage: MessageModelType = new MessageModel({
//       senderId,
//       receiverId,
//       message,
//     });

//     if (newMessage) {
//       const message_id = newMessage._id.toString();
//       conversation.messages.push(message_id);
//     }

//     await Promise.all([conversation.save(), newMessage.save()]);

//     return newMessage;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

// export const getMessageQuery = async (req: Request) => {
//   try {
//     const { senderId } = req.body;
//     const { id: receiverId } = req.params;

//     const conversation = await ConversationModel.findOne({
//       participants: { $all: [senderId, receiverId] },
//     }).populate("messages");

//     if (!conversation) {
//       throw new Error("conversation not created");
//     }

//     return conversation?.messages;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

export const createMessageQuery = async (req: Request) => {
  const { message, author, time } = req.body;
  // console.log(req.body, "asd");

  try {
    const msg = await MessageModel.create({
      message,
      author,
      time,
    });
    return msg;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
