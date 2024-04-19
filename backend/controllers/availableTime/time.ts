import { Request, Response } from "express";
// import { createBabySitterTimeQuery, createReviewQuery } from "../../queries";
import { createParentTimeQuery } from "../../queries/time/create-parent-time";
import {
  createBabySitterTimeQuery,
  getBabysitterTimeQuery,
} from "../../queries";

export const createParentTimeController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await createParentTimeQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const createBabySitterTimeController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await createBabySitterTimeQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getBabySitterTimeController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getBabysitterTimeQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
