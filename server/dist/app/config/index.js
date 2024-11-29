"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_URL: process.env.DATABASE_URL,
    base_url: process.env.BASE_URL,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire: process.env.JWET_EXPIRE,
    mail_user: process.env.MAIL_USER,
    mail_pass: process.env.MAIL_PASS
};
