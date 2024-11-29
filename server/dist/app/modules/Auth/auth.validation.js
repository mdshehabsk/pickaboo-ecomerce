"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const AuthRegisterSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z
            .string({ required_error: "Username is required" })
            .min(1, { message: "Username is required" })
            .max(15, { message: "Username cannot be more than 15 characters" }),
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email({ message: "This is not a valid email" }),
        password: zod_1.z
            .string({
            invalid_type_error: "Password must be a valid string",
            required_error: "Password is required",
        })
            .min(1, { message: "Password is required" })
            .max(30, { message: "Password cannot be more than 30 characters" }),
        cpassword: zod_1.z
            .string({
            invalid_type_error: "Confirm password must be a valid string",
            required_error: "Confirm password is required",
        })
            .min(1, { message: "Confirm password is required" })
            .max(30, { message: "Confirm password cannot be more than 30 characters" }),
    }).refine((data) => data.password === data.cpassword, {
        path: ['body', 'cpassword'], // Adjusted path to the correct location
        message: "Passwords do not match",
    }),
});
exports.AuthValidation = {
    AuthRegisterSchema,
};
