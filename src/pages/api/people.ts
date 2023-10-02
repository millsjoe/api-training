import { getPeople, createPerson, updatePerson } from "../../data/database";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const data = await getPeople();
      res.status(200).json({ data });
      break;

    case "POST":
      const addedData = await createPerson(req.body.name, req.body.hobby);
      res.status(200).json({ addedData });
    case "PUT":
      await updatePerson(req.body.name, req.body.hobby);
      res.status(200).json({ message: `updated ${req.body.name}` });
    default:
      res
        .status(503)
        .json({ message: "i dont know how you got here but you broke it" });
      break;
  }
};
