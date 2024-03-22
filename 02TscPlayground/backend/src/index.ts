import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectToDb from "./database/connectDB";

const PORT: number = 3001;

connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log("listening on port ", PORT);
  });
});
