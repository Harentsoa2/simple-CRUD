import { Router } from "express";
import studentRoutes from "./student.route";
const router = Router();
router.use("/student", studentRoutes);

export default router;