"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const CreateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z
            .string()
            .min(2, { message: "First name should be more than 2 characters" }),
        lastName: zod_1.z
            .string()
            .min(2, { message: "Last name should be more than 2 characters" }),
        username: zod_1.z.string(),
        email: zod_1.z.string(),
        password: zod_1.z
            .string({
            invalid_type_error: "Password must be a valid string",
        })
            .max(30, { message: "Password cannot be more than 30 characters" }),
        phone: zod_1.z.string(),
        // profileImg: z.string(),
        verificationID: zod_1.z.string().optional(),
        role: zod_1.z.enum(["Admin", "Vendor", "User"]).optional(),
        status: zod_1.z.enum(["Active", "Pending"]).optional(),
        isDeleted: zod_1.z.boolean().optional().default(false),
    }),
});
exports.UserValidation = {
    CreateUserZodSchema,
};
