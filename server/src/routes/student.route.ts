import { Router } from "express";
import { createStudentController, deleteStudentController, getAllStudentsController, getStudentByIdController, updateStudentController } from "../controllers/student.controller";

const studentRoutes = Router()
    .post("/", createStudentController)
    .get("/", getAllStudentsController)
    .get("/:id", getStudentByIdController)
    .put("/:id", updateStudentController)
    .delete("/:id", deleteStudentController);

export default studentRoutes;