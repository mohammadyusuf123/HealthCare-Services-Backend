import { Request, Response } from "express"
import { catchAsync } from "../../shared/catchAsync"
import  SpecialtyServices  from "./specialty.services"
import { StatusCodes } from "http-status-codes"
import { sendResponse } from "../../shared/sendResponse"


export class SpecialtyController{
    //create specialty
   public  createSpecialty=catchAsync(async(req:Request,res:Response)=>{
        const payload=req.body
        const result=await  SpecialtyServices.createSpecialty(payload)
        sendResponse({statusCode:StatusCodes.CREATED,
         success:true,
         message:"Specialty created successfully",
         data:result},res)
    })
    //get specialty
   public  getSpecialty=catchAsync(async(req:Request,res:Response)=>{
        const result=await  SpecialtyServices.getSpecialty()
        sendResponse({statusCode:StatusCodes.OK,
         success:true,
         message:"Specialty fetched successfully",
         data:result},res)
    })
    //get specialty by id
   public  getSpecialtyById=catchAsync(async(req:Request,res:Response)=>{
        const id=req.params.id
        const result=await  SpecialtyServices.getSpecialtyById(id as string)
        sendResponse({statusCode:StatusCodes.OK,
         success:true,
         message:"Specialty fetched successfully",
         data:result},res)
    })

    //update specialty
    public updateSpecialty=catchAsync(async(req:Request,res:Response)=>{
        const id=req.params.id
        const payload=req.body
        const result=await  SpecialtyServices.updateSpecialty(payload,id as string)
        sendResponse({statusCode:StatusCodes.OK,
         success:true,
         message:"Specialty updated successfully",
         data:result},res)
    })
    //delete specialty
     deleteSpecialty=catchAsync(async(req:Request,res:Response)=>{
        const id=req.params.id
        const result=await  SpecialtyServices.deleteSpecialty(id as string)
        sendResponse({statusCode:StatusCodes.OK,
         success:true,
         message:"Specialty deleted successfully",
         data:result},res)
    })
}

export default new SpecialtyController