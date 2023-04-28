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
exports.postCreateUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const postCreateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('working');
    const { fullName, email, password, phoneNumber } = req.body;
    if (!fullName || !email || !password || !phoneNumber) {
        return res.status(400).json({ message: "Please provide all fields" });
    }
    try {
        const hashedPassword = bcrypt_1.default.hash(password, 12);
        const [userResponse, created] = yield user_1.default.findOrCreate({
            where: { email },
            defaults: { fullName, email, hashedPassword, phoneNumber }
        });
        if (created) {
            res.status(201).json(userResponse);
        }
        else {
            res.status(404).json({ message: "User already exists" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
exports.postCreateUser = postCreateUser;
