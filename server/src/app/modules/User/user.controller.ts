// import studentZodSchema from '../student/student.validation';
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../../config/index";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { verifyToken } from "../Auth/auth.utils";
import { UserService } from "./user.service";



export const getUserData = catchAsync( async(req,res)=> {
    const userID = req.cookies.user_ID;
    const {_id} = verifyToken(userID,config.jwt_secret);
    const foundUser = await UserService.getUser(_id);

    if(foundUser){
        sendResponse(res,{
            statusCode:httpStatus.OK,
            data:foundUser,
            success:true,
            message:'user get successfull',
            error:null
        })
    }

})


export const UserController = {
    getUserData
}