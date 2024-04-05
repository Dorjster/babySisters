import { Request } from "express";
import { BabysitterModel } from "../../db";

export const getBabysitterQuery = async (req: Request) => {
  try {
    const { id } = req.body;

    const babysitter_info = await BabysitterModel.findById(id).populate(
      "info_id"
    );

    if (!babysitter_info) {
      throw new Error("Хэрэглэгч олдсонгүй");
    }

    // const populatedBabysitterInfo = {
    //     babysitter: babysitter_info,
    //     info: babysitter_info.info_id,
    // };

    return babysitter_info;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
