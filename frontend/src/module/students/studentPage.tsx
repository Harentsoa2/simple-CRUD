import { useState, useEffect } from "react";
import { Navbar } from "../home/ui/navbar";
import StudentList from "./studentList";
import { NewStudentDialog } from "./ui/newStudentDialog";
import { useStudent } from "@/hooks/use-student";

export default function StudentsPage() {
  const [open, setOpen] = useState(false);

  const { getAllStudents } = useStudent();

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div>
      <Navbar onAddClick={() => setOpen(true)} />

      <NewStudentDialog open={open} onOpenChange={setOpen} />

      <div className="pt-24">
        <StudentList />
      </div>
    </div>
  );
}
