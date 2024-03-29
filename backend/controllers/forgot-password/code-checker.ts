import { Request, Response } from "express";
import { codeCheckerQuery } from "../../queries/forgot-password/code-checker";

export const codeCheckerController = async (req: Request, res: Response) => {
  try {
    const user = await codeCheckerQuery(req);
    res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
