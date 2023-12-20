import { useEffect, useState } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { axiosInstance as axios } from "../Store/Axios/axiosInstance";
import { toast } from "react-toastify";

function Logout({ item }) {
  const navigate = useNavigate();
  console.log(item);
  useEffect(() => {
     localStorage.removeItem(item);
    toast.warn("Logged Out");
    if (item === "admin") navigate("/admin/login");
    if (item === "library") {
      localStorage.removeItem("libraryid");
      navigate("/library/login");
    }
    if (item === "user") navigate("/");
  }, [item, navigate]);
}
export default Logout;
