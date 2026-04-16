import { CreateStudentInput } from "../@types/student";
import StudentModel from "../models/student.model";

/**
 * CREATE Student
 */
export const createStudentService = async (data: CreateStudentInput) => {
  const student = await StudentModel.create(data);
  return student;
};


// GET ALL STUDENTS
export const getAllStudentsService = async () => {
  const students = await StudentModel.find();
  return students;
}

/**
 * GET ONE Student
 */
export const getStudentByIdService = async (id: string) => {
  const student = await StudentModel.findById(id);
  return student;
};

/**
 * UPDATE Student
 */
export const updateStudentService = async (id: string, data: CreateStudentInput) => {
  const student = await StudentModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return student;
};

/**
 * DELETE Student
 */
export const deleteStudentService = async (id: string) => {
  const student = await StudentModel.findByIdAndDelete(id);
  return student;
};