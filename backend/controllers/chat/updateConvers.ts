import { Request, Response } from "express";
import { updateConversQuery } from "../../queries";

export const updateConversation = async (req: Request, res: Response) => {
  try {
    const result = await updateConversQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
