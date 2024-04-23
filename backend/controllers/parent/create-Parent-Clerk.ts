import { Request, Response } from "express";
import { CreateParentbyClerkQueries } from "../../queries";

export const CreateParentbyClerkController = async (
  req: Request,
  res: Response
) => {
  try {
    const result1 = await CreateParentbyClerkQueries(req);
    res.status(200).send(result1);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
