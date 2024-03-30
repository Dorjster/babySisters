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
    deleteParentController
} from "../../controllers";

export const userRouter = Router();

userRouter.post("/signup", createBabyController);
userRouter.post("/parent/signup", createParentController);

userRouter.get("/parent/:id", getParentController);
userRouter.get("/babysitter/:id", getBabysitterController);

userRouter.get("/allParents", getAllParentsController);
userRouter.get("/allBabysitters", getAllBabySittersController);

userRouter.put("/parent/:id", updateParentController);
userRouter.put("/babysitter/:id", updateBabysitterController);

userRouter.delete("/parent/:id", deleteParentController);
userRouter.delete("/babysitter/:id", deleteBabysitterController);
