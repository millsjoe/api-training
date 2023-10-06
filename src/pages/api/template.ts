import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // this is the function that next handles - anything that gets exported as 'default' will be handled by nexts routing
  switch (
    req.method // a switch is like a pretty if statement, this could easily be 'if (req.method == "GET")'
  ) {
    case "GET": // all get requests
    /**
     * Add your code here
     * If you get stuck take a look at the greeting route
     */

    case "POST": // all post requests
    /**
     * Add your code here
     * If you get stuck take a look at the greeting route
     */

    default: // all other requests
    /**
     * This will catch all other responses
     * Try adding some different handlers for PUT, DELETE 
     */
  }
};
