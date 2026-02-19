import { Gender } from "../../generated/prisma/enums"

//create pataient
export interface createPatient {
    userId: string
    name: string,
    email: string,
    password: string
}
//env
export interface EnvConfig{
    NODE_ENV: string
    PORT: string
    DATABASE_URL: string
    BETTER_AUTH_URL: string
    BETTER_AUTH_SECRET: string
    APP_URL: string
}
//create speciality

export interface createSpeciality {
    title: string,
    description: string,
    icon: string
}

//create doctor
export interface createDoctor {
    password: string,
     doctor: {
    userId: string,
     designation: string;
    name: string,
    email: string,
    phone?: string,
    address?: string,
    profilePhoto?: string,
    specialization: string,
    experience: number,
    registrationNumber: string,
    qualification: string,
    appointmentFee: number,
    gender: Gender,
    currentWorkingPlace: string,
  },
  specialties: string[],
}