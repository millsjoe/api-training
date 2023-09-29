import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      res.status(200).json({ message: "Hello from the server" });
      break;

    case "POST":
      res.status(200).json({ message: `Hello ${req.body.name}` });
      break;
    default:
      res
        .status(503)
        .json({ message: "i dont know how you got here but you broke it" });
      break;
  }
};
