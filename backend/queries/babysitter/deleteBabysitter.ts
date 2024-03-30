import { Request } from "express";
import { BabysitterModel, InfoModel } from "../../db";
import { compareHash } from "../../utils";

export const deleteBabysitterQuery = async (req: Request) => {
    try {
        const {
            password, rePassword
        } = req.body;

        const { id } = req.params;


        const babysitter = await BabysitterModel.findById({ _id: id });

        const pass = babysitter?.password;
        const info_id = babysitter?.info_id;

        if (!pass) {
            throw new Error("Хэрэглэгч олдсонгүй");
        }

        const comparePassword = compareHash(password, pass);

        if (!comparePassword || (password !== rePassword)) {
            throw new Error("Нууц үгээ шалгаад дахин оролдоно уу");
        }

        const isInfoDeleted = await InfoModel.findByIdAndDelete({
            _id: info_id
        })

        
        const deleted = await BabysitterModel.findByIdAndDelete(
            { _id: id }  
        );

        if (deleted && isInfoDeleted) {
            return "Хэрэглэгч амжилттай устгагдлаа"
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
};
