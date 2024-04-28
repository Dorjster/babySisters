import { Request, Response } from "express";
import { getConversQuery } from "../../queries";

export const getConversation = async (req: Request, res: Response) => {
  try {
    const result = await getConversQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
