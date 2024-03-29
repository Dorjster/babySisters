import { Router } from "express";
import { LoginController, LoginFirstController } from "../../controllers";

export const loginRouter = Router();

loginRouter.post("/login", LoginController);
loginRouter.post("/loginFirst", LoginFirstController);
