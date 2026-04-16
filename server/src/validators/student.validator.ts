import { z } from "zod";

/**
 * CREATE Student Schema
 */
export const createStudentSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name too long"),

  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format"),

  class: z
    .string({
      required_error: "Class is required",
    })
    .min(1, "Class is required"),

  matricule: z
    .string({
      required_error: "Matricule is required",
    })
    .min(3, "Matricule too short")
    .max(30, "Matricule too long"),

  dateOfBirth: z
    .string({
      required_error: "Date of birth is required",
    })
    .transform((val) => new Date(val))
    .refine((date) => date < new Date(), {
      message: "Date of birth must be in the past",
    }),
});