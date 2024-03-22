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
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const adminSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
//hashing password before saving & checking it
adminSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //get reason why NextFunction gave error and this  next: (err?: Error) => void good to go
        if (!this.isModified("password")) {
            return next();
        }
        try {
            this.password = yield bcrypt_1.default.hash(this.password, 10);
            next();
        }
        catch (error) {
            console.log("error wile saving password ", error);
        }
    });
});
adminSchema.methods.isPasswordCorrect = function isPasswordCorrect(password) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt_1.default.compare(password, this.password);
    });
};
//generate accessToken & refreshToken
adminSchema.methods.generateAccessToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            expiresIn: "2D",
        };
        return jsonwebtoken_1.default.sign({ id: this._id }, `${process.env.JWT_SECRET}`, options);
    });
};
adminSchema.methods.generateRefreshToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            expiresIn: "15D",
        };
        return jsonwebtoken_1.default.sign({ id: this._id }, `${process.env.JWT_SECRET}`, options);
    });
};
const Admin = mongoose_1.default.model("Admin", adminSchema);
exports.default = Admin;
