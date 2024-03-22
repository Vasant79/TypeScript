"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controllers_1 = require("../controllers/admin.controllers");
const router = (0, express_1.Router)();
router.get("/testing", admin_controllers_1.test);
router.post("/signup", admin_controllers_1.signup);
router.post("/login", admin_controllers_1.login);
exports.default = router;
