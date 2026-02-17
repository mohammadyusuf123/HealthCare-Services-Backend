import { prisma } from "../../lib/prisma"
import { createSpeciality } from "../../types"



export class SpecialtyServices{

//create specialty
async createSpecialty(payload:createSpeciality){
    const {title,description,icon}=payload
    const data=await prisma.specialty.create({data:{title,description,icon}})
    return data
}   
//get specialty
async getSpecialty(){
    const data=await prisma.specialty.findMany({where:{isDeleted:false}})
    return data 
}

//get specialty by id
async getSpecialtyById(id:string){
    const data=await prisma.specialty.findUnique({where:{id}})
    return data 
}

//update specialty
async updateSpecialty(payload:createSpeciality,id:string){
    const {title,description,icon}=payload
    const data=await prisma.specialty.update({where:{id},data:{title,description,icon}})
    return data
}

//delete specialty
async deleteSpecialty(id:string){
    const data=await prisma.specialty.update({where:{id},data:{isDeleted:true}})
    return data 
}

}

export default new SpecialtyServices