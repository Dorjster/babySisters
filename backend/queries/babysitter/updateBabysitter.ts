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

export type AvailableModel = [
  {
    monday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    tuesday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    wednesday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    thursday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    friday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    saturday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
    sunday: {
      togle: boolean;
      from: { clock: string; AM: string; PM: string };
      to: { clock: string; AM: string; PM: string };
    };
  }
];

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
      // smoker = "",
      language,
      skills,
      year_of_experience,
      character,
      rating = "",
      available_time,
      wage,
      monday = {
        from: {},
        to: {},
      },
      tuesday = { from: {}, to: {} },
      wednesday = { from: {}, to: {} },
      thursday = { from: {}, to: {} },
      friday = { from: {}, to: {} },
      saturday = { from: {}, to: {} },
      sunday = { from: {}, to: {} },
    } = req.body;

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
          // smoker: smoker,
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

    const updateQuery: AvailableModel = [
      {
        // _id: availableTimeId,
        monday: {
          togle: monday.togle,
          from: {
            clock: monday.from.clock,
            AM: monday.from.AM,
            PM: monday.from.PM,
          },
          to: {
            clock: monday.to.clock,
            AM: monday.to.AM,
            PM: monday.to.PM,
          },
        },
        tuesday: {
          togle: tuesday.togle,
          from: {
            clock: tuesday.from.clock,
            AM: tuesday.from.AM,
            PM: tuesday.from.PM,
          },
          to: {
            clock: tuesday.to.clock,
            AM: tuesday.to.AM,
            PM: tuesday.to.PM,
          },
        },
        wednesday: {
          togle: wednesday.togle,
          from: {
            clock: wednesday.from.clock,
            AM: wednesday.from.AM,
            PM: wednesday.from.PM,
          },
          to: {
            clock: wednesday.to.clock,
            AM: wednesday.to.AM,
            PM: wednesday.to.PM,
          },
        },
        thursday: {
          togle: thursday.togle,
          from: {
            clock: thursday.from.clock,
            AM: thursday.from.AM,
            PM: thursday.from.PM,
          },
          to: {
            clock: thursday.to.clock,
            AM: thursday.to.AM,
            PM: thursday.to.PM,
          },
        },
        friday: {
          togle: friday.togle,
          from: {
            clock: friday.from.clock,
            AM: friday.from.AM,
            PM: friday.from.PM,
          },
          to: {
            clock: friday.to.clock,
            AM: friday.to.AM,
            PM: friday.to.PM,
          },
        },
        saturday: {
          togle: saturday.togle,
          from: {
            clock: saturday.from.clock,
            AM: saturday.from.AM,
            PM: saturday.from.PM,
          },
          to: {
            clock: saturday.to.clock,
            AM: saturday.to.AM,
            PM: saturday.to.PM,
          },
        },
        sunday: {
          togle: sunday.togle,
          from: {
            clock: sunday.from.clock,
            AM: sunday.from.AM,
            PM: sunday.from.PM,
          },
          to: {
            clock: sunday.to.clock,
            AM: sunday.to.AM,
            PM: sunday.to.PM,
          },
        },
      },
    ];

    const updatedDocument = await AvailableModel.findByIdAndUpdate(
      { _id: availableTimeId },
      [
        {
          // _id: availableTimeId,
          monday: {
            togle: monday.togle,
            from: {
              clock: monday.from.clock,
              AM: monday.from.AM,
              PM: monday.from.PM,
            },
            to: {
              clock: monday.to.clock,
              AM: monday.to.AM,
              PM: monday.to.PM,
            },
          },
          tuesday: {
            togle: tuesday.togle,
            from: {
              clock: tuesday.from.clock,
              AM: tuesday.from.AM,
              PM: tuesday.from.PM,
            },
            to: {
              clock: tuesday.to.clock,
              AM: tuesday.to.AM,
              PM: tuesday.to.PM,
            },
          },
          wednesday: {
            togle: wednesday.togle,
            from: {
              clock: wednesday.from.clock,
              AM: wednesday.from.AM,
              PM: wednesday.from.PM,
            },
            to: {
              clock: wednesday.to.clock,
              AM: wednesday.to.AM,
              PM: wednesday.to.PM,
            },
          },
          thursday: {
            togle: thursday.togle,
            from: {
              clock: thursday.from.clock,
              AM: thursday.from.AM,
              PM: thursday.from.PM,
            },
            to: {
              clock: thursday.to.clock,
              AM: thursday.to.AM,
              PM: thursday.to.PM,
            },
          },
          friday: {
            togle: friday.togle,
            from: {
              clock: friday.from.clock,
              AM: friday.from.AM,
              PM: friday.from.PM,
            },
            to: {
              clock: friday.to.clock,
              AM: friday.to.AM,
              PM: friday.to.PM,
            },
          },
          saturday: {
            togle: saturday.togle,
            from: {
              clock: saturday.from.clock,
              AM: saturday.from.AM,
              PM: saturday.from.PM,
            },
            to: {
              clock: saturday.to.clock,
              AM: saturday.to.AM,
              PM: saturday.to.PM,
            },
          },
          sunday: {
            togle: sunday.togle,
            from: {
              clock: sunday.from.clock,
              AM: sunday.from.AM,
              PM: sunday.from.PM,
            },
            to: {
              clock: sunday.to.clock,
              AM: sunday.to.AM,
              PM: sunday.to.PM,
            },
          },
        },
      ],
      { new: true }
    );

    const populatedBabysitterInfo = {
      babysitter: updatedBabysitter,
      info: updatedInfo,
      availableTimeId: updatedDocument,
    };
    console.log(populatedBabysitterInfo);

    if (updatedInfo && updatedBabysitter && updatedDocument) {
      return populatedBabysitterInfo;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
