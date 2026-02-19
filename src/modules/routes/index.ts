import { Router } from "express"
import { AuthRoutes } from "../auth/auth.routes"
import { SpecialtyRoutes } from "../specialty/specialty.routes"
import { UsersRoutes } from "../users/users.routes"
import { DoctorRoutes } from "../doctor/doctor.routes"



const router=Router()

router.use('/auth',AuthRoutes)
router.use('/specialty',SpecialtyRoutes)
router.use('/users',UsersRoutes)
router.use('/doctors',DoctorRoutes)  


export default router