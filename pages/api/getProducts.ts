import type { NextApiRequest, NextApiResponse } from "next";
import Product from "@models/Product";
import mongoDB from "@utils/mongoDB";

export default async function scraper(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoDB();
  if (req.method === "GET") {
    const products = await Product.find();
    res.status(200).json(products);
  }else{
      res.status(200).json({ message: "Only GET method allowed" });
  }
}
