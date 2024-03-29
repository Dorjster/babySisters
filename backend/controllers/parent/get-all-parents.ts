import { Request, Response } from "express";
import { getAllParentsQuery } from "../../queries";

export const getAllParentsController = async (req: Request, res: Response) => {
  try {
    const result = await getAllParentsQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
