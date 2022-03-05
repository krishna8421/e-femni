import type { NextApiRequest, NextApiResponse } from "next";
import { validationSchema } from "@utils/validation";
import mongoDB from "@utils/mongoDB";
import User from "@models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import NextCors from 'nextjs-cors';


type UserType = {
  _id: string;
  name: string;
  email: string;
  pass: string;
  __v: number;
};

const passCompare = async (
  name: string,
  email: string,
  pass: string,
  dbPass: string,
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
  if (!(await bcrypt.compare(pass, dbPass))) {
    res.status(200).json({
      status: "error",
      error: "Invalid Email or Password",
    });
    return;
  }
  return jwt.sign({ name, email }, jwt_secret, {
    expiresIn: "7d",
  });
};

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ['GET','POST'],
    origin: '*',
    optionsSuccessStatus: 200,
 });
  await mongoDB();
  if (req.method === "GET") {
    res.status(200).json({ api: "Login" });
  } else if (req.method === "POST") {
    if (!req.body) {
      res.status(200).json({
        status: "error",
        error: "No Data Found",
      });
      return;
    }

    const { error } = validationSchema.login.validate(req.body);
    if (error) {
      res.status(200).json({
        status: "error",
        error: "Invalid Data",
      });
      return;
    }
    const { email, pass } = req.body;

    if (!email || !pass) {
      res.status(200).json({
        status: "error",
        error: "Please fill all the fields",
      });
      return;
    }
    const user: UserType | null = await User.findOne({ email });
    if (!user) {
      res.status(200).json({
        status: "error",
        error: "User not found",
      });
      return;
    }
    const { pass: dbPass, name } = user;
    const token = await passCompare(name, email, pass, dbPass, res);
    if (!token) {
      res.status(200).json({
        status: "error",
        error: "Server ERR, Token not generated.",
      });
      return;
    }
    if (token) {
      res.status(200).json({
        status: "success",
        token,
      });
    }
  } else {
    res.status(200).json({ message: "Only GET and POST method allowed" });
  }
}
