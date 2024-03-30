import { Request, Response } from "express";
import { getReviewsQuery } from "../../queries";

export const getReviewController = async (req: Request, res: Response) => {
  try {
    const result = await getReviewsQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
