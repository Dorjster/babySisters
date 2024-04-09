// app.post("/search", async (req: Request, res: Response) => {
//   const { key } = req.body;
//   const { hits } = await algoliaIndex.search(key);

//   res.send(hits);
// });

// import { Request, Response } from "express";
// import { algoliaIndex } from "../../algogia/algolia";

// export const searchBabysitterController = async (
//   req: Request,
//   res: Response
// ) => {
//   try {
//     const { key } = req.body;
//     console.log(key);

//     const { hits } = await algoliaIndex.search(key);

//     res.send(hits);
//   } catch (error: any) {
//     res.status(400).send(error.message);
//   }
// };
