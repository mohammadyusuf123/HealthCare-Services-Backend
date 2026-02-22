
import { z } from "zod";

export const GenderEnum = z.enum([
  "MALE",
  "FEMALE",
  "OTHER"
]);
export const createDoctorSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z.string().email("Invalid email"),

  phone: z.string().optional(),

  address: z.string().optional(),

  profilePhoto: z.string().url().optional(),

  specialization: z.string().min(1, "Specialization is required"),

  experience: z
    .number()
    .int()
    .nonnegative("Experience must be positive")
    .default(0),

  registrationNumber: z.string().min(1, "Registration number required"),

  qualification: z.string().min(1, "Qualification is required"),

  appointmentFee: z
    .number()
    .positive("Appointment fee must be positive"),

  gender: GenderEnum,

  designation: z.string().min(1, "Designation required"),

  currentWorkingPlace: z
    .string()
    .min(1, "Current working place required"),

  userId: z.string().min(1, "User ID is required"),
});