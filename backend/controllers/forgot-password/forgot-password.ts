import { Request, Response } from "express";
import { forgotPasswordQuery } from "../../queries";

export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const user = await forgotPasswordQuery(req, res);
    res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
