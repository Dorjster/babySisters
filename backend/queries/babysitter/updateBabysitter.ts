import { Request } from "express";
import {
  AvailableModel,
  BabysitterModel,
  InfoModel,
  AvailableModelType,
} from "../../db";
import {
  passwordHash,
  compareHash,
  // transformDataForAlgolia,
} from "../../utils";
// import { algoliaIndex } from "../../algogia/algolia";

export type AvailableModel = {
  weekday: string;
  from: Date;
  to: Date;
};

export const updateBabysitterQuery = async (req: Request) => {
  try {
    const {
      id,
      oldPassword = "",
      email,
      name = "",
      phone = "",
      newPassword = "",
      address,
      about,
      gender,
      image,
      verification = "",
      driver_license,
      has_children,
      education,
      car,
      language,
      skills,
      year_of_experience,
      character,
      rating = "",
      wage,
      availableTime,
    } = req.body;
    console.log(req.body, "boduy");

    const hash = passwordHash(newPassword);

    const babysitter = await BabysitterModel.findById({ _id: id });

    if (!babysitter) {
      throw new Error("Хэрэглэгч олдсонгүй");
    }

    const updatedBabysitter = await BabysitterModel.findOneAndUpdate(
      { email: email },
      {
        $set: {
          address: address,
          about: about,
          image: image,
          gender: gender,
        },
      },
      { new: true }
    );

    const info_id = babysitter?.info_id;

    const updatedInfo = await InfoModel.findByIdAndUpdate(
      { _id: info_id },
      {
        $set: {
          driver_license: driver_license,
          has_children: has_children,
          education: education,
          car: car,
          language: language,
          skills: skills,
          year_of_experience: year_of_experience,
          character: character,
          wage: wage,
        },
      },
      { new: true }
    );

    const availableTimeId = babysitter?.availableTime;
    // console.log(availableTimeId, "id");

    const updatedAvailableTime = await AvailableModel.findByIdAndUpdate(
      { _id: availableTimeId },
      {
        $set: {
          availables: {
            Даваа: {
              from: availableTime.Даваа.from,
              to: availableTime.Даваа.to,
            },
            Мягмар: {
              from: availableTime.Мягмар.from,
              to: availableTime.Мягмар.to,
            },
            Лхагва: {
              from: availableTime.Лхагва.from,
              to: availableTime.Лхагва.to,
            },
            Пүрэв: {
              from: availableTime.Пүрэв.from,
              to: availableTime.Пүрэв.to,
            },
            Баасан: {
              from: availableTime.Баасан.from,
              to: availableTime.Баасан.to,
            },
            Бямба: {
              from: availableTime.Бямба.from,
              to: availableTime.Бямба.to,
            },
            Ням: {
              from: availableTime.Ням.from,
              to: availableTime.Ням.to,
            },
          },
        },
      },
      { new: true }
    );
    const populatedBabysitterInfo = {
      babysitter: updatedBabysitter,
      info: updatedInfo,
      availableTime: updatedAvailableTime,
    };
    console.log(populatedBabysitterInfo);

    if (updatedInfo || updatedBabysitter || updatedAvailableTime) {
      return populatedBabysitterInfo;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
