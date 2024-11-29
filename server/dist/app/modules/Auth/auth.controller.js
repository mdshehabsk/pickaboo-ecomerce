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
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const auth_service_1 = require("./auth.service");
const authRegister = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { emailExist, googleId, userSaved } = yield auth_service_1.AuthServices.userRegister(data);
    if (emailExist) {
        (0, sendResponse_1.default)(res, { statusCode: http_status_1.default.FORBIDDEN, success: false, data: null, error: 'email already exist', });
    }
    if (googleId) {
        (0, sendResponse_1.default)(res, { statusCode: http_status_1.default.FORBIDDEN, success: false, data: null, error: 'login with google method' });
    }
    if (userSaved) {
        (0, sendResponse_1.default)(res, { statusCode: http_status_1.default.OK, success: true, message: 'user create successfull please verify your email' });
    }
}));
exports.AuthController = {
    authRegister
};
