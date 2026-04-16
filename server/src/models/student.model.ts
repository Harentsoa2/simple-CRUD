import mongoose, { Document, Schema } from "mongoose";

export interface StudentDocument extends Document {
  firstName: string;
  email: string;
  class: string;
  matricule: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
}

const studentSchema = new Schema<StudentDocument>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    class: {
      type: String,
      required: true,
    },
    matricule: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model<StudentDocument>(
  "Student",
  studentSchema
);

export default StudentModel;