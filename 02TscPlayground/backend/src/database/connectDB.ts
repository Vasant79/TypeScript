import mongoose from "mongoose";

export default async function connectToDb() {
  try {
    let connection = await mongoose.connect(`${process.env.MONGO_URL}`);

    if (connection) {
      console.log("db connected");
    }
  } catch (error) {
    console.log("error in connecting to db ", error);
  }
}
