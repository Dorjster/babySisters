import { Request, Response } from "express";
import { deleteBabysitterQuery } from "../../queries";

export const deleteBabysitterController = async (req: Request, res: Response) => {
    try {
        const result = await deleteBabysitterQuery(req);

        res.send(result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};
