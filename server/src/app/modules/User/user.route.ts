import {Router} from "express";
import { UserController } from "./user.controller";






const router = Router();


router.route('/get-user-data').get(UserController.getUserData)


export const UserRoutes = router;
