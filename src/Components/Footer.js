import { Outlet } from "react-router-dom";
import logo from "../Assets/New Library Logo.png";

export default function Footer() {
  return (
    <>
    <Outlet />
    <footer className="bg-gray-200 py-4 text-center sticky ">
      <p className="text-gray-600">© {new Date().getFullYear()} Library Hub</p>
    </footer>
    </>
  );
} 
