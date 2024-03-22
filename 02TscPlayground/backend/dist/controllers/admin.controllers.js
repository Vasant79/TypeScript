"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = exports.test = void 0;
const Admin_models_1 = __importDefault(require("../models/Admin.models"));
const generateAccessAndRefreshToken_1 = __importDefault(require("../utils/generateAccessAndRefreshToken"));
function test(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).json({ msg: "Typscript setup success" });
    });
}
exports.test = test;
//sign
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //get data
        //validate data * problem statement
        //check in db if already exist
        //if not add admin to db
        //give response.
        const { username, email, password } = req.body;
        try {
            const userExist = yield Admin_models_1.default.findOne({ email });
            if (userExist) {
                return res.status(400).json({ msg: "Admin already exist" });
            }
            const createAdmin = yield Admin_models_1.default.create({ username, email, password });
            if (createAdmin) {
                res.status(200).json({ msg: "admin created" });
            }
        }
        catch (error) {
            console.log("error in signing up admin ", error);
        }
    });
}
exports.signup = signup;
//login
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //get data
        //validate data
        //check if matches with db record
        //generate token
        //set in cookie
        const { email, password } = req.body;
        try {
            const userExist = yield Admin_models_1.default.findOne({ email });
            if (!userExist) {
                return res.status(400).json({ msg: "unauthorized" });
            }
            const isPasswordCorrect = yield userExist.isPasswordCorrect(password);
            if (!isPasswordCorrect) {
                return res.status(400).json({ msg: "unauthorized" });
            }
            console.log("id of user --> ", userExist._id);
            const { accessToken, refreshToken } = yield (0, generateAccessAndRefreshToken_1.default)(userExist.id);
            const options = { httpOnly: true, secure: true };
            res
                .status(200)
                .cookie("aToken", accessToken, options)
                .cookie("rToken", refreshToken, options)
                .json({ msg: "login endpoint", accessToken, refreshToken });
        }
        catch (error) {
            console.log("error in logging in ", error);
        }
    });
}
exports.login = login;
