import { Router } from "express";
import { LoginController, LoginFirstController } from "../../controllers";
import { Auth } from "../../middleWare/auth";

export const loginRouter = Router();

loginRouter.post("/login", LoginController);
loginRouter.post("/loginFirst", LoginFirstController);
