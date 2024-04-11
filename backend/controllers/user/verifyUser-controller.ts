import { verifyUser } from "../../queries/user/verifyUser";
import { Request, Response } from "express";

export const verifyUserController = async (req: Request, res: Response) => {
  try {
    const result = await verifyUser(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
