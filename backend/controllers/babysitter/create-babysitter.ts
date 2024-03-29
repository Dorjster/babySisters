import { Request, Response } from "express";
import { createBabysitterQuery } from "../../queries";

export const createBabyController = async (req: Request, res: Response) => {
  try {
    const result = await createBabysitterQuery(req);

    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
