// import { Request, Response } from "express";
// import { createConversQuery } from "../../queries";

// export const createConversation = async (req: Request, res: Response) => {
//   try {
//     const result = await createConversQuery(req);
//     res.status(200).send(result);
//   } catch (error: any) {
//     res.status(500).send(error.message);
//   }
// };

import { Request, Response } from "express";
import { createConversQuery } from "../../queries";
import { ConversationModelType } from "../../db";

type CreateConversationType = { existingConversation: ConversationModelType };

export const createConversation = async (req: Request, res: Response) => {
  try {
    const result = (await createConversQuery(req)) as
      | CreateConversationType
      | ConversationModelType;

    if (Object(result).existingConversation) {
      return res.status(200).send(Object(result).existingConversation);
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
