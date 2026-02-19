import { Router } from "express";
import  UsersController  from "./users.controller";

const router=Router()

router.post('/create',UsersController.createPatient)
// router.get('/get',UsersController.getPatient)
// router.get('/get/:id',UsersController.getPatientById)
// router.put('/update/:id',UsersController.updatePatient)
// router.delete('/delete/:id',UsersController.deletePatient)

export const UsersRoutes=router