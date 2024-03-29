import { Request, Response } from "express";
import { createParentQuery } from "../../queries";

export const createParentController = async (req: Request, res: Response) => {
  try {
    const result = await createParentQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
