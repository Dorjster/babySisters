import { Request } from "express";
import { ParentModel } from "../../db";

// Interface for optional query parameters (optional)

export const getAllParentsQuery = async (req: Request) => {
  const {
    page = 1,
    pageSize = 9,
    address = "",
    minWage = "",
    maxWage = "",
    verification,
  } = req.body;

  try {
    let search = {};
    if (address || minWage || maxWage || verification) {
      search = {
        ...(address && { address }),
        ...(maxWage && { wage: { $lte: maxWage } }),
        ...(minWage && { wage: { $gte: Number(minWage) } }), // Ensure number conversion
        ...(verification && { verification }),
      };
    }

    // Calculate skip and limit values for pagination
    const skip = (page - 1) * pageSize;
    const limit = pageSize;

    const [totalCount, parents] = await Promise.all([
      ParentModel.countDocuments(search),
      ParentModel.find(search).skip(skip).limit(limit),
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);

    if (!parents.length) {
      throw new Error("No parents found");
    }

    return { parents, totalPages, totalCount };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
