import { HTTPSTATUS } from "../config/http.config";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { Request, Response } from "express";
import StudentModel from "../models/student.model";
import { createStudentSchema } from "../validators/student.validator";
import { create } from "domain";
import { createStudentService, deleteStudentService, getAllStudentsService, getStudentByIdService, updateStudentService } from "../services/student.service";

export const createStudentController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = createStudentSchema.parse(req.body);
    const student = await createStudentService(body);

    return res.status(HTTPSTATUS.CREATED).json({
      message: "Student created successfully",
      student,
    });
  }
);

export const getAllStudentsController = asyncHandler(
  async (req: Request, res: Response) => {
    const students = await getAllStudentsService();

    return res.status(HTTPSTATUS.OK).json({
      message: "Students fetched successfully",
      count: students.length,
      students,
    });
  }
);

export const getStudentByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const student = await getStudentByIdService(id);

    if (!student) {
      return res.status(HTTPSTATUS.NOT_FOUND).json({
        message: "Student not found",
      });
    }

    return res.status(HTTPSTATUS.OK).json({
      message: "Student fetched successfully",
      student,
    });
  }
);



export const updateStudentController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const updatedStudent = await updateStudentService(id as string, req.body);

    if (!updatedStudent) {
      return res.status(HTTPSTATUS.NOT_FOUND).json({
        message: "Student not found",
      });
    }

    return res.status(HTTPSTATUS.OK).json({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  }
);

export const deleteStudentController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const deletedStudent = await deleteStudentService(id as string);

    if (!deletedStudent) {
      return res.status(HTTPSTATUS.NOT_FOUND).json({
        message: "Student not found",
      });
    }

    return res.status(HTTPSTATUS.OK).json({
      message: "Student deleted successfully",
    });
  }
);
