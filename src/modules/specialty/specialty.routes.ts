import { Router } from "express"
import  SpecialtyController  from "./specialty.controller"



const router=Router()
router.post('/create',SpecialtyController.createSpecialty)
router.get('/get',SpecialtyController.getSpecialty)
router.get('/get/:id',SpecialtyController.getSpecialtyById)
router.put('/update/:id',SpecialtyController.updateSpecialty)
router.delete('/delete/:id',SpecialtyController.deleteSpecialty)

export const SpecialtyRoutes=router