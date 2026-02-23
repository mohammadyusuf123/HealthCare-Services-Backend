import { NextFunction, Request, Response, Router } from "express";
import  UsersController  from "./users.controller";
import { createDoctorSchema } from "../../middleware/validationSchema/doctorValidationSchema";

const router=Router()

router.post('/create',(req:Request,res:Response,next:NextFunction)=>{
    const parsedData=createDoctorSchema.safeParse(req.body)
    if (!parsedData.success) {
      return res.status(400).json({
        success: false,
        errors: parsedData.error.flatten(),
      });
    }
    //sanitize data
    req.body=parsedData.data
    next()
},UsersController.createPatient)
// router.get('/get',UsersController.getPatient)
// router.get('/get/:id',UsersController.getPatientById)
// router.put('/update/:id',UsersController.updatePatient)
// router.delete('/delete/:id',UsersController.deletePatient)

export const UsersRoutes=router