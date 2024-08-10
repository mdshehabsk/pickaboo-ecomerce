import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // data validation check
    try {
      schema.parse({
        body: req.body,
      });

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          path: err.path[1],
          message: err.message,
        }));
        return res.status(400).json({
          status: "error",
          errors: formattedErrors,
        });
      }
      next(error);
    }
  };
};

export default validateRequest;
