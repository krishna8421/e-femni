import type { NextApiRequest, NextApiResponse } from "next";
import mongoDB from "@utils/mongoDB";
import Product from "@models/Product";
import { validationSchema } from "@utils/validation";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "@utils/constants";

type Product = {
  imgUrl: string;
  productName: string;
  price: number;
};

export default async function addProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoDB();
  if (req.method === "GET") {
    res.status(200).json({ api: "addProducts" });
  } else if (req.method === "POST") {
    if (!req.body) {
      res.status(200).json({
        status: "error",
        error: "No Data Found",
      });
      return;
    }
    const { error } = validationSchema.product.validate(req.body);
    if (error) {
      res.status(200).json({
        status: "error",
        error: error.message,
      });
      return;
    }

    const { username, password, singleData, data } = req.body;

    if (username !== ADMIN_USERNAME && password !== ADMIN_PASSWORD) {
      res.status(200).json({
        status: "error",
        error: "Invalid Username or Password",
      });
      return;
    }
    if (singleData) {
      const newItem = new Product(data);
      await newItem.save();
    }
    data.map(async (item: Product) => {
      const newItem = new Product(item);
      await newItem.save();
    });
    res.status(200).json({
      status: "success",
      message: "Products Added Successfully",
    });
  } else {
    res.status(200).json({ message: "Only GET and POST method allowed" });
  }
}
