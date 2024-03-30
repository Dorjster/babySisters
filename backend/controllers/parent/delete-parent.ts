import { Request, Response } from "express";
import { deleteParentQuery } from "../../queries";

export const deleteParentController = async (req: Request, res: Response) => {
    try {
        const result = await deleteParentQuery(req);

        res.send(result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
};
