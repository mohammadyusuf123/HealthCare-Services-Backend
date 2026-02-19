import { Request, Response } from "express";
import  UsersServices  from "./users.services";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";



export class UsersController {
    //create doctor
  public createPatient=catchAsync(async(req:Request,res:Response)=>{
           const payload=req.body
           const result=await  UsersServices.createDoctor(payload)
           sendResponse({statusCode:StatusCodes.CREATED,
            success:true,
            message:"Doctor created successfully",
            data:result},res)
       })
}

export default new UsersController