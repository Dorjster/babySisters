import { Request, Response } from "express";
import { getBabysitterQuery } from "../../queries";

export const getBabysitterController = async (req: Request, res: Response) => {
  try {
    const result = await getBabysitterQuery(req);

    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
