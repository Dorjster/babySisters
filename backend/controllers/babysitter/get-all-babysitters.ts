import { Request, Response } from "express";
import { getAllBabySittersQuery } from "../../queries";

export const getAllBabySittersController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getAllBabySittersQuery(req);

    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
