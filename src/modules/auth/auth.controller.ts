import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import  AuthServices  from "./auth.services";
import { sendResponse } from "../../shared/sendResponse";



export class AuthController{
    //create patient
    public createPatient=catchAsync(async(req:Request,res:Response)=>{
           const payload=req.body
           console.log(payload);
           const result=await  AuthServices.createPatient(payload)
           sendResponse({statusCode:200,
            success:true,
            message:"Patient created successfully",
            data:result},res)
       })

       //login patient
       public login=catchAsync(async(req:Request,res:Response)=>{
        const payload=req.body
        console.log(payload);
        const result=await  AuthServices.login(payload.email,payload.password)
        sendResponse({statusCode:200,
         success:true,
         message:"Patient login successfully",
         data:result},res)
    })
}

export default new AuthController