import { Router } from "express";
import {
  codeCheckerController,
  forgotPasswordController,
} from "../../controllers";
import { changePasswordController } from "../../controllers";

export const forgotRouter = Router();

forgotRouter.post("/forgot", forgotPasswordController);

forgotRouter.post("/codeChecker", codeCheckerController);

forgotRouter.post("/changePassword", changePasswordController);

export default forgotRouter;
