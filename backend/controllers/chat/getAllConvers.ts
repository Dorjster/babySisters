import { Request, Response } from "express";

import { getAllConversQuery } from "../../queries/conversation/getAllConvers";

export const getAllConversation = async (req: Request, res: Response) => {
  try {
    const result = await getAllConversQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
