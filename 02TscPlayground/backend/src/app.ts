import express from "express";
import cors from "cors";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
import adminRouter from "./routes/admin.routes";

app.use("/api/v1/admin", adminRouter);

export default app;
