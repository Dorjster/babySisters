import { Request, Response } from "express";
import { createReviewQuery } from "../../queries";

export const createReviewController = async (req: Request, res: Response) => {
  try {
    const result = await createReviewQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
