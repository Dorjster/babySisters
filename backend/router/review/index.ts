import { Router } from "express";
import {
    createReviewController, getReviewController
} from "../../controllers";

export const reviewRouter = Router();

reviewRouter.post("/review", createReviewController);
reviewRouter.get("/review", getReviewController);

