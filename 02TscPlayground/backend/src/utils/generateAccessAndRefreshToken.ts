import Admin, { adminDocument } from "../models/Admin.models";

export default async function generateAccessAndRefreshToken(userId: string) {
  try {
    const adminData = (await Admin.findById(userId)) as adminDocument;

    if (!adminData) {
      throw new Error("unauthorized");
    }

    const accessToken = await adminData.generateAccessToken();
    const refreshToken = await adminData.generateRefreshToken();

    adminData.refreshToken = refreshToken;
    adminData.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
    throw new Error("error in generating token");
  }
}
