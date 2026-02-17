import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import  AuthServices  from "./auth.services";
import { sendResponse } from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";



export class AuthController{
    //create patient
    public createPatient=catchAsync(async(req:Request,res:Response)=>{
           const payload=req.body
           const result=await  AuthServices.createPatient(payload)
           sendResponse({statusCode:StatusCodes.CREATED,
            success:true,
            message:"Patient created successfully",
            data:result},res)
       })

       //login patient
       public login=catchAsync(async(req:Request,res:Response)=>{
        const payload=req.body
        const result=await  AuthServices.login(payload.email,payload.password)
        sendResponse({statusCode:StatusCodes.OK,
         success:true,
         message:"Patient login successfully",
         data:result},res)
    })
}

export default new AuthController