import mongoose, { Document } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export interface adminDocument extends Document {
  username: string;
  email: string;
  password: string;
  refreshToken: string;
  isPasswordCorrect(password: string): Promise<boolean>;
  generateAccessToken(): Promise<string>;
  generateRefreshToken(): Promise<string>;
}

const adminSchema = new mongoose.Schema<adminDocument>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

//hashing password before saving & checking it
adminSchema.pre(
  "save",
  async function (this: adminDocument, next: (err?: Error) => void) {
    //get reason why NextFunction gave error and this  next: (err?: Error) => void good to go
    if (!this.isModified("password")) {
      return next();
    }

    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (error) {
      console.log("error wile saving password ", error);
    }
  }
);

adminSchema.methods.isPasswordCorrect = async function isPasswordCorrect(
  this: adminDocument,
  password: string
) {
  return bcrypt.compare(password, this.password);
};

//generate accessToken & refreshToken
adminSchema.methods.generateAccessToken = async function (this: adminDocument) {
  const options: jwt.SignOptions = {
    expiresIn: "2D",
  };
  return jwt.sign({ id: this._id }, `${process.env.JWT_SECRET}`, options);
};

adminSchema.methods.generateRefreshToken = async function (
  this: adminDocument
) {
  const options: jwt.SignOptions = {
    expiresIn: "15D",
  };
  return jwt.sign({ id: this._id }, `${process.env.JWT_SECRET!}`, options);
};

const Admin = mongoose.model<adminDocument>("Admin", adminSchema);

export default Admin;
