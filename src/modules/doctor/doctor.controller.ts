import { Request, Response } from "express"
import { catchAsync } from "../../shared/catchAsync"
import { StatusCodes } from "http-status-codes"
import  DoctorServices  from "./doctor.services"
import { sendResponse } from "../../shared/sendResponse"




export class DoctorController {
    //get all doctors
    public getAllDoctors=catchAsync(async(req:Request,res:Response)=>{
        const result=await  DoctorServices.getAllDoctors()
        sendResponse({statusCode:StatusCodes.OK,
         success:true,
         message:"Doctors fetched successfully",
         data:result},res)
     })
     ///get doctor by id
     public getDoctorById=catchAsync(async(req:Request,res:Response)=>{
        const id=req.params.id
        const result=await  DoctorServices.getDoctorById(id as string)
        sendResponse({statusCode:StatusCodes.OK,
         success:true,
         message:"Doctor fetched successfully",
         data:result},res)
     })
     ////delete doctor
     public deleteDoctor=catchAsync(async(req:Request,res:Response)=>{
        const id=req.params.id
        const result=await  DoctorServices.deleteDoctor(id as string)
        sendResponse({statusCode:StatusCodes.OK,
         success:true,
         message:"Doctor deleted successfully",
         data:result},res)
     })
}

export default new DoctorController