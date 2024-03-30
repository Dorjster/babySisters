import { Request } from "express";
import { BabysitterModel } from "../../db";
import { compareHash } from "../../utils";

export const deleteBabysitterQuery = async (req: Request) => {
    try {
        const {
            password, rePassword
        } = req.body;

        const { id } = req.params;


        const babysitter = await BabysitterModel.findById({ id });

        const pass = babysitter?.password;

        if (!pass) {
            throw new Error("Хэрэглэгч олдсонгүй");
        }

        const comparePassword = compareHash(password, pass);

        if (!comparePassword || (password !== rePassword)) {
            throw new Error("Нууц үгээ шалгаад дахин оролдоно уу");
        }

        
        const deleted = await BabysitterModel.findByIdAndDelete(
            { _id: id }  
        );

        if (deleted) {
            return "Хэрэглэгч амжилттай устгагдлаа"
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
};
