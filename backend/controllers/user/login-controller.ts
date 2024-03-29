import { Request, Response } from "express";
import { loginQuery } from "../../queries";
import { loginFirst } from "../../queries/login/login-first";

export const LoginController = async (req: Request, res: Response) => {
  try {
    const result = await loginQuery(req, res);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
export const LoginFirstController = async (req: Request, res: Response) => {
  try {
    const result = await loginFirst(req, res);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
