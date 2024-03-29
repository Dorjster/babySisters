import { Request, Response } from "express";
import { getParentQuery } from "../../queries";

export const getParentController = async (req: Request, res: Response) => {
  try {
    const result = await getParentQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
