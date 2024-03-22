import { Router } from "express";
import { test, signup, login } from "../controllers/admin.controllers";

const router = Router();

router.get("/testing", test);
router.post("/signup", signup);
router.post("/login", login);

export default router;
