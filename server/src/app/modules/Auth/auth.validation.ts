import { z } from "zod";
import { IUser } from "../User/user.interface";

const AuthRegisterSchema = z.object({
  body: z
    .object({
      username: z
        .string({ required_error: "Username is required" })
        .min(1, { message: "Username is required" })
        .max(15, { message: "Username cannot be more than 15 characters" }),
      email: z
        .string({ required_error: "Email is required" })
        .email({ message: "This is not a valid email" }),
      password: z
        .string({
          invalid_type_error: "Password must be a valid string",
          required_error: "Password is required",
        })
        .min(1, { message: "Password is required" })
        .max(30, { message: "Password cannot be more than 30 characters" }),
      cpassword: z
        .string({
          invalid_type_error: "Confirm password must be a valid string",
          required_error: "Confirm password is required",
        })
        .min(1, { message: "Confirm password is required" })
        .max(30, {
          message: "Confirm password cannot be more than 30 characters",
        }),
    })
    .refine((data) => data.password === data.cpassword, {
      path: ["cpassword"], // Adjusted path to the correct location
      message: "Passwords do not match",
    }),
});

const AuthVerifySchema = z.object({
  query: z.object({
    token: z.string({ required_error: "token is missing" }),
  }),
});
export const AuthValidation = {
  AuthRegisterSchema,
  AuthVerifySchema,
};
