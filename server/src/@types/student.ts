import z from "zod";
import { createStudentSchema } from "../validators/student.validator";

export type CreateStudentInput = z.infer<typeof createStudentSchema>;