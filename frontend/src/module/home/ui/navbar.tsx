"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onAddClick: () => void;
}

export const Navbar = ({ onAddClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-center bg-black text-white px-6 py-3 rounded-xl shadow-md">
          
          <Link to="/" className="font-semibold text-lg">
            STUDENTS
          </Link>

          <Button
            variant="outline"
            size="sm"
            className="text-black bg-white hover:bg-gray-200"
            onClick={onAddClick}
          >
            Ajouter student
          </Button>

        </div>
      </div>
    </nav>
  );
};