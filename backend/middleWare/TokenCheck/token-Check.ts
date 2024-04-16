import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const tokenCheck = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1] as string;

  if (!token) {
    res.status(401).send("Access denied. No token provided.");
    return;
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "secret",
    (err: jwt.VerifyErrors | null) => {
      if (err) {
        res.status(401).send(err.message);
      } else {
        next();
      }
    }
  );
};
