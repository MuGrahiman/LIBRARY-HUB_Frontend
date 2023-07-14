import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import BookListPage from "../pages/Librarian/COLLECTION/BookListPage";
import DashboardPage from "../pages/Librarian/DASHBOARD/Dashboard";
import ReserveListPage from "../pages/Librarian/RESERVED/ReserveListPage";
import UserListPage from "../pages/Librarian/USER/UserListPage";
import SideBar from "../Components/SideBar";
import Assets from "../Assets/new Library Logo.svg";
import { Menus } from "../pages/data";
import LoginPage from "../pages/Librarian/Sign-In&Up/LoginPage";
import SignUpPage from "../pages/Librarian/Sign-In&Up/SignUpPage";
import OTPPage from "../pages/Librarian/Sign-In&Up/OTPPage";
import PlanPage from "../pages/Librarian/PLAN/Plans";
import CategoryPage from "../pages/Librarian/CATEGORY/CategoryPage";
import Logout from "../Utils/Log-Out";

function LibraryRouter() {
  const [open, setOpen] = useState(true);

  return (
    <Routes>
        <Route path="login" element={<LoginPage />} /> 
        <Route path="otp" element={<OTPPage />} /> 
        <Route path="signup" element={<SignUpPage />} /> 
      <Route
        path="/"
        element={
          <SideBar
            Menus={Menus}
            Logo={Assets}
            onClose={() => setOpen(!open)}
            onOpen={open}
            Title={"Lunar Library"}
          />
        }
      >
        <Route path="dashboard" element={<DashboardPage />} /> 
        <Route path="collection" element={<BookListPage />} />
        <Route path="reserved" element={<ReserveListPage />} />
        <Route path="users" element={<UserListPage />} />
        <Route path="plans" element={<PlanPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="logout" element={<Logout item='library' />} />
      </Route>
    </Routes>
  );
}

export default LibraryRouter;
