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
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const sendMail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, token, subject, username, }) {
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
    // eslint-disable-next-line no-undef
    const filePath = path_1.default.join(__dirname, "..", "..", "views");
    const fileVal = yield ejs_1.default.renderFile(`${filePath}/email.ejs`, {
        token,
        username,
    });
    const mailSend = yield transporter.sendMail({
        from: `pickaboo <${process.env.MAIL_USER}>`,
        to: email,
        subject,
        html: fileVal,
    });
    return mailSend;
});
exports.sendMail = sendMail;
