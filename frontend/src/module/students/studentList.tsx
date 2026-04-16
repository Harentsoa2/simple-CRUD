import { useEffect } from "react";
import { Trash2, Pencil } from "lucide-react";
import { useStudent } from "@/hooks/use-student";

export default function StudentList() {
  const { students, getAllStudents, deleteStudent } = useStudent();

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Students</h1>
      </div>

      {/* TABLE */}
      <div className="rounded-xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Class</th>
              <th className="text-right p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student._id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* NAME */}
                <td className="p-3 font-medium">
                  {student.firstName}
                </td>

                {/* EMAIL */}
                <td className="p-3 text-gray-600">
                  {student.email}
                </td>

                {/* CLASS */}
                <td className="p-3 text-gray-600">
                  {student.class}
                </td>

                {/* ACTIONS */}
                <td className="p-3">
                  <div className="flex justify-end gap-3">
                    {/* EDIT */}
                    <button
                      className="p-2 rounded-md hover:bg-blue-100 transition"
                      onClick={() => {
                        console.log("edit", student._id);
                      }}
                    >
                      <Pencil size={18} className="text-blue-600" />
                    </button>

                    {/* DELETE */}
                    <button
                      className="p-2 rounded-md hover:bg-red-100 transition"
                      onClick={() => deleteStudent(student._id)}
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* EMPTY STATE */}
        {students.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No students found
          </div>
        )}
      </div>
    </div>
  );
}