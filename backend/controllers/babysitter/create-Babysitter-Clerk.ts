import { Request, Response } from "express";
import { CreateBabysitterbyClerkQuieries } from "../../queries";

export const CreateBabysitterbyClerkController = async (
  req: Request,
  res: Response
) => {
  try {
    const result1 = await CreateBabysitterbyClerkQuieries(req);
    res.status(200).send(result1);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
