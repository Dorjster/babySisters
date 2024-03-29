import { Request, Response } from "express";
import { updateParentQuery } from "../../queries";

export const updateParentController = async (req: Request, res: Response) => {
  try {
    const result = await updateParentQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};