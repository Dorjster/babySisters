import { Request, Response } from "express";
import { changePasswordQuery } from "../../queries";

export const changePasswordController = async (req: Request, res: Response) => {
  try {
    const user = await changePasswordQuery(req);
    res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
