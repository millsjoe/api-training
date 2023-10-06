import {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} from "../../data/database";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    req.headers.authorization !== process.env.API_KEY &&
    req.method !== "GET"
  ) {
    return res.status(403).json({ message: "unauthorized" });
  }
  switch (req.method) {
    case "GET":
      const data = await getPeople();
      return res.status(200).json({ data });

    case "POST":
      const addedData = await createPerson(req.body.name, req.body.hobby);
      return res
        .status(201)
        .json({
          message: `created new person ${req.body.name} with hobby ${req.body.hobby}`,
        });

    case "PUT":
      await updatePerson(req.body.name, req.body.hobby);
      return res.status(200).json({ message: `updated ${req.body.name}` });

    case "DELETE":
      await deletePerson(req.body.name);
      return res.status(200).json({
        message: `deleted ${req.body.name}`,
      });

    default:
      return res
        .status(503)
        .json({ message: "i dont know how you got here but you broke it" });
  }
};
