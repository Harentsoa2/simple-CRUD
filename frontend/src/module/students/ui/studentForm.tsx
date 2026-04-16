"use client";

import { useState } from "react";
import { useStudent } from "@/hooks/use-student";

interface StudentFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const StudentForm = ({ onSuccess, onCancel }: StudentFormProps) => {
  const { createStudent, isCreating } = useStudent();

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    class: "",
    matricule: "",
    dateOfBirth: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createStudent(form);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-2">
      <input
        name="firstName"
        placeholder="First name"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        name="class"
        placeholder="Class (L1, L2...)"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        name="matricule"
        placeholder="Matricule"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        type="date"
        name="dateOfBirth"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-2 rounded border"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isCreating}
          className="px-3 py-2 rounded bg-black text-white"
        >
          {isCreating ? "Creating..." : "Create"}
        </button>
      </div>
    </form>
  );
};