import { Request, Response } from "express";
import { createInfoQuery } from "../../queries";

export const createInfoController = async (req: Request, res: Response) => {
  try {
    const result = await createInfoQuery(req);

    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};