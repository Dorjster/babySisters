import { Request } from "express";
import { AvailableModel, ParentModel, BabysitterModel } from "../../db";

export const createBabySitterTimeQuery = async (req: Request) => {
  try {
    const {
      babysitter_id,
      monday = {},
      tuesday = {},
      wednesday = {},
      thursday = {},
      friday = {},
      saturday = {},
      sunday = {},
    } = req.body;

    const time = await AvailableModel.create({
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday,
      babysitter_id: babysitter_id,
    });

    await BabysitterModel.findByIdAndUpdate(
      { _id: babysitter_id },
      {
        $addToSet: {
          availableTime: time._id,
        },
      }
    );
    return time;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
