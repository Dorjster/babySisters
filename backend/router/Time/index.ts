import { Router } from "express";
import {
  createParentTimeController,
  createBabySitterTimeController,
  getBabySitterTimeController,
  // getParentTimeController,
} from "../../controllers/availableTime/time";

export const timeRouter = Router();

timeRouter.post("/ParentTime", createParentTimeController);
timeRouter.post("/BabyTime", createBabySitterTimeController);

timeRouter.post("/getBabySitterTime", getBabySitterTimeController);
// timeRouter.get("/getParentTime", getParentTimeController);
