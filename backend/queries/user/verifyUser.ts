import { Request, Response } from "express";
import { getUserById } from "../../utils";
import { BabysitterModel, ParentModel } from "../../db";

export const verifyUser = async (req: Request) => {
  const { verificationCode, userId } = req.body;

  try {
    const user = await getUserById(userId);
    const role = user?.role;

    if (role === "BabySitter") {
      const babysitter = await BabysitterModel.findById({ _id: userId });
      if (!babysitter) {
        throw new Error("Бүртгэлгүй хэрэглэгч");
      }
      const verifyCodeFromDb = babysitter?.verifyCode;

      if (verificationCode === verifyCodeFromDb) {
        await BabysitterModel.findByIdAndUpdate(
          { _id: userId },
          { verification: true },
          { new: true }
        );

        return "Амжилттай баталгаажлаа !";
      } else {
        throw new Error("Нууц үг буруу байна!");
      }
    }

    if (role === "Parent") {
      const parent = await ParentModel.findById({ _id: userId });
      console.log(parent, "pareent");

      if (!parent) {
        throw new Error("Бүртгэлгүй хэрэглэгч");
      }

      const verifyCodeFromDb = parent?.verifyCode;

      if (verificationCode === verifyCodeFromDb) {
        await ParentModel.findByIdAndUpdate(
          { _id: userId },
          { verification: true },
          { new: true }
        );
        return "Амжилттай баталгаажлаа !";
      } else {
        throw new Error("Нууц үг буруу байна!");
      }
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
