"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StudentForm } from "./studentForm";

interface NewStudentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewStudentDialog = ({
  open,
  onOpenChange,
}: NewStudentDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="z-[999] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Student</DialogTitle>
          <DialogDescription>Create a new student</DialogDescription>
        </DialogHeader>

        <StudentForm
          onSuccess={() => onOpenChange(false)}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
