import { Request } from "express";
import { AvailableModel, ParentModel, BabysitterModel } from "../../db";

export const createBabySitterTimeQuery = async (req: Request) => {
  try {
    const {
      monday = {},
      tuesday = {},
      wednesday = {},
      thursday = {},
      friday = {},
      saturday = {},
      sunday = {},
      email,
    } = req.body;
    console.log(req.body, "body");

    const babysitter = await BabysitterModel.findOne({ email: email });
    // console.log(babysitter, "asd");
    if (!babysitter) {
      throw new Error("user not found");
    }

    const babysitter_id = babysitter._id;

    const time = await AvailableModel.create({
      // babysitter_id: babysitter_id,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday,
    });

    await BabysitterModel.findByIdAndUpdate(
      babysitter_id, // Directly pass the ID
      {
        $addToSet: {
          availableTime: time,
        },
      }
    );

    // const populatedBabySitter = await AvailableModel.find().populate(
    //   "babysitter_id"
    // );

    // if (!populatedBabySitter) {
    //   throw new Error("babySitter time population failed");
    // }
    return time;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
