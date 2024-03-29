import { Router } from "express";
import { createBabyController, createParentController, getParentController, getBabysitterController, getAllParentsController, getAllBabySittersController } from "../../controllers";

export const userRouter = Router();

userRouter.post("/signup", createBabyController);
userRouter.post("/parent/signup", createParentController);
userRouter.get("/user/parent", getParentController);
userRouter.get("/user/babysitter", getBabysitterController);
userRouter.get("/user/allParents", getAllParentsController);
userRouter.get("/user/allBabysitters", getAllBabySittersController)

