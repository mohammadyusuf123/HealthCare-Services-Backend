import { createPatient } from "../../types";
import { auth } from "../../lib/auth";
import { UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";


export class AuthServices{
//create pataient
async createPatient(payload:createPatient){
    const {name,email,password}=payload
const data=await auth.api.signUpEmail({
  body: {
    name,
    email,
    password,
  },
})
if(!data){
  throw new Error("Failed to create patient")
}
const patient=prisma.$transaction(async (tx)=>{
  const patientTx=await tx.patient.create({
    data: {
      userId:data.user.id,
      name,
      email
    },
  })

  return patientTx
})
return{
  ...data,
  patient
}

}
//login patient
async login(email:string,password:string){
const data=await auth.api.signInEmail({
  body: {
    email,
    password,
  },
})
if(!data){
  throw new Error("Failed to login patient")
}
if(data.user.status===UserStatus.BLOCKED){
  throw new Error("Your account is blocked")
}
if(data.user.status===UserStatus.DELETED){
  throw new Error("Your account is deleted")
}
return data
}
}

export default new AuthServices()
