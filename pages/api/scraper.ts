import type { NextApiRequest, NextApiResponse } from "next";
import { fetchFromAmazon } from "@utils/api/fetchFromAmazon";

export default async function scraper(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchTerm = req.query.s as string;
  const result: {} = await fetchFromAmazon(searchTerm);
  res.send(result);
}
