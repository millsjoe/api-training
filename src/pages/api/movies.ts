import { mockData } from "@/data/mockMovie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return res.status(200).json(mockData);

    default:
      return res
        .status(503)
        .json({ message: "i dont know how you got here but you broke it" });
  }
};
