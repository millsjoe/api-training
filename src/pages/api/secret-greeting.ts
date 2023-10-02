import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    req.method === "GET" &&
    req.headers.authorization === process.env.API_KEY
  ) {
    return res.status(200).json({ message: "super secret hello" });
  }
  return res.status(403).json({message: "entry denied"});
};
