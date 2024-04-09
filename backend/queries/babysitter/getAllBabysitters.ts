import { Request } from "express";
import { BabysitterModel } from "../../db";
import { algoliaClient, algoliaIndex } from "../../algogia/algolia";

export const getAllBabySittersQuery = async (req: Request) => {
  const { query = {} } = req.body;
  try {
    if (Object.keys(query).length === 0) {
      const babysitters = await BabysitterModel.find().populate("info_id");

      if (babysitters === null) {
        throw new Error("Бүртгэлтэй хэрэглэгч олдсонгүй");
      }

      return babysitters;
    } else {
      const { hits } = await algoliaIndex.search(query);

      return hits;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
