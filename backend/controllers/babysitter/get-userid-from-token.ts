import { Request, Response } from "express";
import { getUserIdFromToken } from "../../queries";

export const getUserIdFromTokenController = async (req: Request, res: Response) => {
  try {
    const result = await getUserIdFromToken(req);

    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};