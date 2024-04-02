import { Request, Response } from "express";
import { getLoggedInUser } from "../../queries/user/getLoggedinUser";

export const getRefreshTokenService = async (req: Request, res: Response) => {
  try {
    const user = await getLoggedInUser(req);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
