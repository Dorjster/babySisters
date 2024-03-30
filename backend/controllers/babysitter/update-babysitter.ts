import { Request, Response } from "express";
import { updateBabysitterQuery } from "../../queries";

export const updateBabysitterController = async (req: Request, res: Response) => {
    try {
        const result = await updateBabysitterQuery(req);

        res.send(result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};
