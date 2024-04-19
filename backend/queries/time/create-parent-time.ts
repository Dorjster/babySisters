import { Request } from "express";
import { AvailableModel, ParentModel, BabysitterModel } from "../../db";

export const createParentTimeQuery = async (req: Request) => {
  try {
    const {
      parent_id,
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
      parent_id: parent_id,
    });

    await ParentModel.findByIdAndUpdate(
      { _id: parent_id },
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
