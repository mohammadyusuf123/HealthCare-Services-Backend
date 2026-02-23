import { createPatient } from "../../types";
import { auth } from "../../lib/auth";
import { UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { tokenUtils } from "../../utils/token";
import { role } from "better-auth/plugins";


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
try {
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
} catch (error) {
  console.log(error);
    await prisma.user.delete({
      where: {
        id: data.user.id,
      },
    })
  throw new Error("Failed to create patient")
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
const accessToken= tokenUtils.getAccessToken({
  id:data.user.id,
  email:data.user.email,
  role:data.user.role,
  name:data.user.name,
  status:data.user.status,
  isDeleted:data.user.isDeleted,
  emailVerified:data.user.emailVerified,

})
const refreshToken= tokenUtils.getAccessToken({
  id:data.user.id,
  email:data.user.email,
  role:data.user.role,
  name:data.user.name,
  status:data.user.status,
  isDeleted:data.user.isDeleted,
  emailVerified:data.user.emailVerified,

})
return {
  ...data,
  accessToken,
  refreshToken}
}
}

export default new AuthServices()
