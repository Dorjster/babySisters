import { Request, Response } from "express";
import { getInfoQuery } from "../../queries";

export const getInfoController = async (req: Request, res: Response) => {
  try {
    const result = await getInfoQuery(req);

    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};