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
exports.isLogin = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const isLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const authToken = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
    if (!authToken) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Your'e Not Authorize");
    }
    jsonwebtoken_1.default.verify(authToken, config_1.default.jwt_secret, (err, decoded) => {
        if (err) {
            return next('Jwt invalid');
        }
        const payload = decoded;
        req.user = payload;
        next();
    });
});
exports.isLogin = isLogin;
