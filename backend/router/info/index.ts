import { Router } from "express";
import { createInfoController, getInfoController } from "../../controllers";

export const infoRouter = Router();

infoRouter.post("/info", createInfoController);
infoRouter.get("/info", getInfoController);


