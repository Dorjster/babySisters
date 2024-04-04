import { Request } from "express";
import jwt from "jsonwebtoken";

export const getUserIdFromToken = async (req: Request) => {
    try {
        const {token} = req.body;
        const decodedToken: any = await jwt.verify(token, "defaultSecret");
        const userId: string = decodedToken.userId;
        
        return userId;
    } catch (error) {
        console.error("Error verifying token or userId not found:", error);
        throw new Error("Error verifying token or userId not found");
    }
};