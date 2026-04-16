/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";
import { toast } from "sonner";
import { API } from "@/lib/axios-client";

export type StudentType = {
  _id: string;
  firstName: string;
  email: string;
  class: string;
  matricule: string;
  dateOfBirth: string;
};

export type CreateStudentType = {
  firstName: string;
  email: string;
  class: string;
  matricule: string;
  dateOfBirth: string;
};

interface StudentState {
  students: StudentType[];
  student: StudentType | null;

  isLoading: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  isDeleting: boolean;

  createStudent: (data: CreateStudentType) => Promise<void>;
  getAllStudents: () => Promise<void>;
  getStudentById: (id: string) => Promise<void>;
  updateStudent: (id: string, data: Partial<CreateStudentType>) => Promise<void>;
  deleteStudent: (id: string) => Promise<void>;
}

export const useStudent = create<StudentState>()((set, get) => ({
  students: [],
  student: null,

  isLoading: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,

  /**
   * CREATE STUDENT
   */
  createStudent: async (data) => {
    set({ isCreating: true });
    try {
      const res = await API.post("/student", data);

      set({ students: [res.data.student, ...get().students] });

      toast.success("Student created successfully");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Create student failed");
    } finally {
      set({ isCreating: false });
    }
  },

  /**
   * GET ALL STUDENTS
   */
  getAllStudents: async () => {
    set({ isLoading: true });
    try {
      const res = await API.get("/student");

      set({ students: res.data.students });
      console.log(res.data.students);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Fetch students failed");
    } finally {
      set({ isLoading: false });
    }
  },

  /**
   * GET STUDENT BY ID
   */
  getStudentById: async (id) => {
    set({ isLoading: true });
    try {
      const res = await API.get(`/student/${id}`);

      set({ student: res.data.student });
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Fetch student failed");
    } finally {
      set({ isLoading: false });
    }
  },

  /**
   * UPDATE STUDENT
   */
  updateStudent: async (id, data) => {
    set({ isUpdating: true });
    try {
      const res = await API.put(`/student/${id}`, data);

      const updated = res.data.student;

      set({
        students: get().students.map((s) =>
          s._id === id ? updated : s
        ),
        student: updated,
      });

      toast.success("Student updated successfully");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      set({ isUpdating: false });
    }
  },

  /**
   * DELETE STUDENT
   */
  deleteStudent: async (id) => {
    set({ isDeleting: true });
    try {
      await API.delete(`/student/${id}`);

      set({
        students: get().students.filter((s) => s._id !== id),
      });

      toast.success("Student deleted successfully");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Delete failed");
    } finally {
      set({ isDeleting: false });
    }
  },
}));