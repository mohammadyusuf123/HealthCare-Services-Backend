import { prisma } from "../../lib/prisma"
import { createSpeciality } from "../../types"


export class DoctorServices {
    //get all doctors
    async getAllDoctors(){
        const data=await prisma.doctor.findMany({where:{isDeleted:false}})
        return data 
    }
    //get doctor by id
    async getDoctorById(id:string){
        const data=await prisma.doctor.findUnique({where:{id}})
        return data 
    }
    //update doctor
    // async updateDoctor(payload:createSpeciality,id:string){
    //     const {title,description,icon}=payload
    //     const data=await prisma.doctor.update({where:{id},data:{title,description,icon}})
    //     return data
    // }
    //delete doctor
    async deleteDoctor(id:string){
        const data=await prisma.doctor.delete({where:{id}})
        return data 
    }
}

export default new DoctorServices