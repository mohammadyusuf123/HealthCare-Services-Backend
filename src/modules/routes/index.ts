import { Router } from "express"
import { AuthRoutes } from "../auth/auth.routes"
import { SpecialtyRoutes } from "../specialty/specialty.routes"



const router=Router()

router.use('/auth',AuthRoutes)
router.use('/specialty',SpecialtyRoutes)

export default router