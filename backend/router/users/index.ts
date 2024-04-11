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
  getUserIdFromTokenController,
  verifyUserController,
} from "../../controllers";
import { getRefreshTokenService } from "../../controllers/user/refresh";
// import { searchBabysitterController } from "../../controllers/babysitter/search";

export const userRouter = Router();

userRouter.post("/signup", createBabyController);
userRouter.post("/parent/signup", createParentController);

userRouter.post("/get/parent", getParentController);
userRouter.post("/get/babysitter", getBabysitterController);

userRouter.get("/allParents", getAllParentsController);
userRouter.get("/allBabysitters", getAllBabySittersController);

userRouter.post("/parentUpdate", updateParentController);
userRouter.post("/babysitter", updateBabysitterController);

userRouter.delete("/parent", deleteParentController);
userRouter.delete("/babysitter", deleteBabysitterController);

userRouter.get("/refresh", getRefreshTokenService);

userRouter.post("/getUserId", getUserIdFromTokenController);

userRouter.post("/verifyUser", verifyUserController);

// userRouter.post("/search", searchBabysitterController);
