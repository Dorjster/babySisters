import { Router } from "express";
import {
  createAvailableController,
  createBabySitterTimeController,
} from "../../controllers/availableTime/time";

export const timeRouter = Router();

timeRouter.post("/ParentTime", createAvailableController);
timeRouter.post("/BabyTime", createBabySitterTimeController);
