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
exports.AuthServices = void 0;
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("../User/user.model");
const auth_utils_1 = require("./auth.utils");
const sendMail_1 = require("../../mail/sendMail");
const userRegister = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, cpassword, email, password } = user;
    const userExist = yield user_model_1.User.findOne({ email });
    if (userExist) {
        if (userExist.googleId) {
            return {
                googleId: true,
            };
        }
        return {
            emailExist: true,
        };
    }
    const userSaved = new user_model_1.User({ email, username, password });
    const token = (0, auth_utils_1.CreateToken)({ _id: userSaved._id }, config_1.default.jwt_secret, config_1.default.jwt_expire);
    const mailSend = yield (0, sendMail_1.sendMail)({ email: userSaved.email, subject: 'verification', token, username: userSaved.username });
    yield userSaved.save();
    if (userSaved && (mailSend === null || mailSend === void 0 ? void 0 : mailSend.accepted)) {
        return {
            userSaved: true,
        };
    }
    throw new Error("user registration faild");
});
exports.AuthServices = {
    userRegister,
};
