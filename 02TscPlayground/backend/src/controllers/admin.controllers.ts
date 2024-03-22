import { Request, Response } from "express";
import Admin from "../models/Admin.models";
import generateAccessAndRefreshToken from "../utils/generateAccessAndRefreshToken";

async function test(req: Request, res: Response) {
  res.status(200).json({ msg: "Typscript setup success" });
}

//sign
async function signup(req: Request, res: Response) {
  //get data
  //validate data * problem statement
  //check in db if already exist
  //if not add admin to db
  //give response.

  const { username, email, password } = req.body;

  try {
    const userExist = await Admin.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Admin already exist" });
    }

    const createAdmin = await Admin.create({ username, email, password });

    if (createAdmin) {
      res.status(200).json({ msg: "admin created" });
    }
  } catch (error) {
    console.log("error in signing up admin ", error);
  }
}

//login
async function login(req: Request, res: Response) {
  //get data
  //validate data
  //check if matches with db record
  //generate token
  //set in cookie

  const { email, password } = req.body;

  try {
    const userExist = await Admin.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ msg: "unauthorized" });
    }

    const isPasswordCorrect = await userExist.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ msg: "unauthorized" });
    }

    console.log("id of user --> ", userExist._id);
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      userExist.id
    );

    const options = { httpOnly: true, secure: true };

    res
      .status(200)
      .cookie("aToken", accessToken, options)
      .cookie("rToken", refreshToken, options)
      .json({ msg: "login endpoint", accessToken, refreshToken });
  } catch (error) {
    console.log("error in logging in ", error);
  }
}

export { test, signup, login };
