import type { NextApiRequest, NextApiResponse } from "next";
import { fetchFromAmazon } from "@utils/api/fetchFromAmazon";

export default async function scraper(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const searchTerm = req.query.s as string;
    if (!searchTerm) {
      res.status(200).json({
        status: "error",
        error: "No search term found, add ?s=searchTerm to the url",
      });
      return;
    }
    const result = await fetchFromAmazon(searchTerm);
    res.send(result);
  } else {
    res.status(200).json({ message: "Only GET method allowed" });
  }
}
