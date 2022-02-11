import type { NextApiRequest, NextApiResponse } from "next";

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ type: "Register" });
}