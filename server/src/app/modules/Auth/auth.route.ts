import { Router } from "express";
import { AuthController } from "./auth.controller";
import {validateBodyRequest, validateQueryRequest} from "../../middleware/validateRequest";
import { AuthValidation } from "./auth.validation";
import { User } from "../User/user.model";

const router = Router()


router.post('/register', validateBodyRequest(AuthValidation.AuthRegisterSchema), AuthController.authRegister )



router.get('/user', async (req,res)=> {
    const user = await User.find()
    res.json(user)
})

router.get('/verify-user', validateQueryRequest(AuthValidation.AuthVerifySchema),AuthController.verifyUser)
export const AuthRoutes = router;