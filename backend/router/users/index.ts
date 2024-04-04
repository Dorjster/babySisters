import { Router } from "express";
import {
  createBabyController,
  createParentController,
  getParentController,
  getBabysitterController,
  getAllParentsController,
  getAllBabySittersController,
  updateParentController,
  updateBabysitterController,
  deleteBabysitterController,
  deleteParentController,
} from "../../controllers";
import { getRefreshTokenService } from "../../controllers/user/refresh";

export const userRouter = Router();

userRouter.post("/signup", createBabyController);
userRouter.post("/parent/signup", createParentController);

userRouter.get("/parent", getParentController);
userRouter.get("/babysitter", getBabysitterController);

userRouter.get("/allParents", getAllParentsController);
userRouter.get("/allBabysitters", getAllBabySittersController);

userRouter.post("/parentUpdate", updateParentController);
userRouter.post("/babysitter", updateBabysitterController);

userRouter.delete("/parent", deleteParentController);
userRouter.delete("/babysitter", deleteBabysitterController);

userRouter.get("/refresh", getRefreshTokenService);
