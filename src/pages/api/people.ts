import { getPeople, createPerson, updatePerson } from "../../data/database";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const data = await getPeople();
      return res.status(200).json({ data });
      

    case "POST":
      if (req.headers.authorization !== process.env.API_KEY) {
        return res.status(403).json({ message: "unauthorized" });
      }
      const addedData = await createPerson(req.body.name, req.body.hobby);
      return res.status(200).json({ addedData });
      

    case "PUT":
      await updatePerson(req.body.name, req.body.hobby);
      return res.status(200).json({ message: `updated ${req.body.name}` });
      
    default:
      return res
        .status(503)
        .json({ message: "i dont know how you got here but you broke it" });
      
  }
};
