import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { AuthValidation } from "./auth.validation";

const router = Router()


router.post('/register', validateRequest(AuthValidation.AuthRegisterSchema), AuthController.authRegister )


export const AuthRoutes = router;