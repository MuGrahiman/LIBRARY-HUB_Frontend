import React, { useEffect, useState } from "react";
import ADashboardPage from "./pages/admin/Dashboard";
import Login from "./Components/Login";
import ALoginPage from "./pages/admin/Login";
import AListPage from "./pages/admin/LibraryList";
import APlanPage from "./pages/admin/Plans";
// import SearchBar from "./Components/SearchBar";
import LSignUpPage from "./pages/Librarian/Sign-In&Up/SignUpPage";
import LibraryAdd from "./Components/LibraryAdd";
import Modal from "./Components/Modal";
import axios from "axios";
import NewPage from "./pages/NewPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./Router/AdminRouter";
import LibraryRouter from "./Router/LibraryRouter";
import UserRouter from "./Router/UserRouter";
import LBListPage from "./pages/Librarian/COLLECTION/BookListPage";
import LBANPage from "./pages/Librarian/Banner/LBANPage";
import LCATPage from "./pages/Librarian/CATEGORY/LCATPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/admin/*"} element={<AdminRouter />} />
        <Route path={"/library/*"} element={<LibraryRouter />} />
        <Route path={"/user/*"} element={<UserRouter />} />
      </Routes>
    </Router>
    // <LCATPage/>
  );
}

export default App;
