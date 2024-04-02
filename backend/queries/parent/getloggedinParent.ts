// import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";
// import { ParentModel } from "../../db";
// import { Request, Response } from "express";

// type DecodedType = {
//   _id: string;
//   iat: number;
//   exp: number;
// };

// export const getLoggedInParent = async (req: Request) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       console.log("Not logged in");
//       return;
//     }

//     const secret = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;

//     const decoded = jwt.verify(token, secret) as unknown;

//     const id = decoded as DecodedType;

//     const getUserById = async (id: any) => {
//       const user = await ParentModel.findOne({ _id: id });
//       return user;
//     };

//     const user = await getUserById(id?._id);

//     if (!user) throw new Error("User not found");

//     return user;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };
