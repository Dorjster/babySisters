import { Request, Response } from "express";
import { createConversQuery } from "../../queries";

export const createConversation = async (req: Request, res: Response) => {
  try {
    const result = await createConversQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
