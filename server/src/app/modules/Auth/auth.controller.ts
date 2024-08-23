import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";



const authRegister = catchAsync(async (req,res)=> {
    const data = req.body;

    const {emailExist,googleId,userSaved} = await AuthServices.userRegister(data)

    if(emailExist){
        sendResponse(res,{statusCode: httpStatus.FORBIDDEN,success:false,data:null,error:'email already exist',})
    }
    if(googleId){
        sendResponse(res,{statusCode: httpStatus.FORBIDDEN,success:false, data: null, error:'login with google method'})
    }
    if(userSaved){
        sendResponse(res,{statusCode: httpStatus.OK, success:true,message:'user create successfull please verify your email'})
    }
})



const verifyUser = catchAsync(async (req,res)=> {
    const {token} = req.query;

    
    const {userVerify} = await AuthServices.verifyUser(token)
})

export const AuthController = {
    authRegister,
    verifyUser
};