import { createPatient } from "../../types";
import { auth } from "../../lib/auth";


export class AuthServices{
//create pataient
async createPatient(payload:createPatient){
    const {name,email,password}=payload
    console.log(name,email,password);
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
// const patient=prisma.$transaction(async (tx)=>{
//   const patient=await tx.user.create({
//     data: {
//       name,
//       email,
//       password,
//       role: "PATIENT",
//     },
//   });
//   return patient
// })
return data
}

}

export default new AuthServices()
