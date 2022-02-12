import type { NextApiRequest, NextApiResponse } from "next";
import { validationSchema } from "@utils/validation";
import mongoDB from "@utils/mongoDB";
import User from "@models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saveToDB = async (
  name: string,
  email: string,
  pass: string,
  res: NextApiResponse
) => {
  const jwt_secret = process.env.JWT_SECRET;
  if (!jwt_secret) {
    res.status(200).json({
      status: "error",
      error: "Server ERR, JWT Secret not found.",
    });
    return;
  }
  const salt = await bcrypt.genSalt();
  const hashedPass = await bcrypt.hash(pass, salt);
  const newUser = new User({
    name,
    pass: hashedPass,
    email,
  });
  const saved = await newUser.save();
  if (!saved) {
    res.status(200).json({
      status: "error",
      error: "Server ERR, User not saved.",
    });
    return;
  }
  return jwt.sign({ name, email }, jwt_secret, {
    expiresIn: "7d",
  });
};

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoDB();
  if (req.method === "GET") {
    res.status(200).json({ api: "Register" });
  } else if (req.method === "POST") {
    if (!req.body) {
      res.status(200).json({
        status: "error",
        error: "No Data Found",
      });
      return;
    }
    const { error } = validationSchema.register.validate(req.body);
    if (error) {
      res.status(200).json({
        status: "error",
        error: error.message,
      });
      return;
    }

    const { name, email, pass } = req.body;

    if (!name || !email || !pass) {
      res.status(200).json({
        status: "error",
        error: "Please fill all the fields",
      });
      return;
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(200).json({
        status: "error",
        error: "User already exists",
      });
    }

    const token = await saveToDB(name, email, pass, res);
    if (!token) {
      res.status(200).json({
        status: "error",
        error: "Server ERR, Token not generated.",
      });
      return;
    }
    return res.status(200).json({
      status: "success",
      token,
    });
  } else {
    res.status(200).json({ message: "Only GET and POST method allowed" });
  }
}
