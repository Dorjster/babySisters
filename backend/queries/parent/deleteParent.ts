import { Request } from "express";
import { ParentModel } from "../../db";
import { compareHash } from "../../utils";

export const deleteParentQuery = async (req: Request) => {
    try {
        const { password, rePassword } = req.body;

        const { id } = req.params;

        const parent = await ParentModel.findById({ id });

        const pass = parent?.password;

        if (!pass) {
            throw new Error("Хэрэглэгч олдсонгүй");
        }

        const comparePassword = compareHash(password, pass);

        if (!comparePassword || password !== rePassword) {
            throw new Error("Нууц үгээ шалгаад дахин оролдоно уу");
        }

        const deleted = await ParentModel.findByIdAndDelete({ _id: id });

        if (deleted) {
            return "Хэрэглэгч амжилттай устгагдлаа";
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
};
